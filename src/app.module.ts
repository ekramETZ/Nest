import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './config/database.config';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './external-api/external-api.module';
import { AuthModule } from './auth/auth.module';
import { BookingModule } from './bookings/bookings.module';
import { TicketModule } from './tickets/tickets.module';
import { PassengerModule } from './passengers/passengers.module';
import { PictureModule } from './picture/picture.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    CommentsModule,
    UsersModule,
    AuthModule,
    BookingModule,
    TicketModule,
    PassengerModule,
    PictureModule,
  ],
})
export class AppModule {}