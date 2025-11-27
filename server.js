const express = require('express');
const cors = require('cors');
const path = require('path');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-key-123';

// 中间件
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '.'))); // 服务当前目录的静态文件

// 模拟数据库
const orders = new Map();

// API: 创建订单
app.post('/api/create-order', (req, res) => {
    try {
        const { productId, amount, userId } = req.body;
        const orderId = `ORDER_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

        const order = {
            orderId,
            productId,
            amount,
            userId,
            status: 'pending',
            createdAt: new Date().toISOString(),
            // 使用 qrserver 生成二维码
            qrCodeUrl: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=PAY_${orderId}`
        };

        orders.set(orderId, order);

        // 模拟支付成功 (3秒后)
        setTimeout(() => {
            const existingOrder = orders.get(orderId);
            if (existingOrder && existingOrder.status === 'pending') {
                existingOrder.status = 'paid';
                existingOrder.paidAt = new Date().toISOString();

                // 生成 Token
                const token = jwt.sign(
                    { userId, orderId, productId },
                    JWT_SECRET,
                    { expiresIn: '365d' }
                );
                existingOrder.accessToken = token;
                orders.set(orderId, existingOrder);
                console.log(`Order ${orderId} marked as paid`);
            }
        }, 3000);

        res.json({
            success: true,
            orderId,
            qrCodeUrl: order.qrCodeUrl
        });

    } catch (error) {
        console.error('Create order error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// API: 查询订单状态
app.get('/api/order-status', (req, res) => {
    const { orderId } = req.query;
    if (!orderId) return res.status(400).json({ error: 'Missing orderId' });

    const order = orders.get(orderId);
    if (!order) return res.status(404).json({ error: 'Order not found' });

    res.json({
        status: order.status,
        token: order.accessToken,
        paidAt: order.paidAt
    });
});

// 所有其他请求返回 index.html (SPA支持)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Local access: http://localhost:${PORT}`);
});
