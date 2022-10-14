import { NestFactory } from '@nestjs/core';

import { AppModule } from '@modules/app.module';

async function main() {
  try {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);

    app.enableCors({
      origin:
        process.env.NODE_ENV === 'dev'
          ? 'http://localhost:3000'
          : 'https://alyanoyigor.github.io/feedback-form-app',
      credentials: true,
    });

    await app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
      console.log('Press CTRL + C to stop');
    });
  } catch (error) {
    console.error(error);
  }
}

main();
