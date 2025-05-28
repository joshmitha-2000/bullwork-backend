const express = require('express');
const cors = require('cors');
const app = express();
const orderRoutes = require('./routes/orderroutes');
const blogRoutes = require('./routes/blogroutes');
const productRoutes = require('./routes/productroutes');
const demoFormRoutes = require('./routes/demoroute');
const featureRoutes =require('./routes/featureroute');


app.use(cors({
  origin: ['http://localhost:5173', 'https://bullwork.vercel.app'],
  credentials: true
}));

app.use(express.json());

app.use('/api/orders', orderRoutes);
app.use('/blogs', blogRoutes);
app.use('/products', productRoutes);
app.use('/api/demo', demoFormRoutes);
app.use("/api/features", featureRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
