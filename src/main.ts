import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {ValidationPipe} from "./pipes/validation.pipe";


async function start(){
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule)
    app.enableCors();

    const config = new DocumentBuilder()
        .setTitle("About NestJS")
        .setDescription("Documentation REST API")
        .setVersion("1.0.0")
        .addTag("3aqaryan")
        .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup("/api/docs", app, document)

    app.useGlobalPipes(new ValidationPipe()) //for all endpoints

    await app.listen(PORT, () => console.log(`Server is started on port = ${PORT}`))
}
start()