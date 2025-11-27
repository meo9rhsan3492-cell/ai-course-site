const express = require('express');
const cors = require('cors');
const path = require('path');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-key-123';

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '.')));

// Mock Database
const orders = new Map();

// Activation Codes (In production, use a real database)
const activationCodes = new Map([
    ['VIP-8888', { used: false }],
    ['AI-2025', { used: false }],
    ['LEARN-NOW', { used: false }],
    ['SVIP-6666', { used: false }],
    ['ANTIGRAVITY-1', { used: false }],
    ['ANTIGRAVITY-2', { used: false }],
    ['ANTIGRAVITY-3', { used: false }]
]);

// API: Verify Activation Code
app.post('/api/verify-code', (req, res) => {
    const { code } = req.body;

    if (!code) {
        return res.status(400).json({ success: false, error: '请输入激活码' });
    }

    const codeData = activationCodes.get(code);

    if (!codeData) {
        return res.status(400).json({ success: false, error: '无效的激活码' });
    }

    // Optional: Check if used
    // if (codeData.used) {
    //     return res.status(400).json({ success: false, error: '激活码已被使用' });
    // }

    res.json({ success: true });
});

// API: Create Order (Legacy/Backup)
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
            qrCodeUrl: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=PAY_${orderId}`
        };

        orders.set(orderId, order);

        // Simulate payment success after 3 seconds
        setTimeout(() => {
            const existingOrder = orders.get(orderId);
            if (existingOrder && existingOrder.status === 'pending') {
                existingOrder.status = 'paid';
                existingOrder.paidAt = new Date().toISOString();

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

// API: Check Order Status
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

// Serve index.html for all other routes (SPA support)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Local access: http://localhost:${PORT}`);
});
