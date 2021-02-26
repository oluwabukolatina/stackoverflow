import app from '../app';
/**
 * App Variables
 */
if (!process.env.PORT) {
  process.exit(1);
}
const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`running on ${PORT}`);
  // sequelize
  //   .authenticate()
  //   .then(() => {
  //     console.log('Connection has been established successfully.');
  //   })
  //   .catch((err) => {
  //     console.error('Unable to connect to the database:', err);
  //   });
});
