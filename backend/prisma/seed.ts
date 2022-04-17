import 'reflect-metadata';
import { PrismaClient } from '@prisma/client';
import {
  randEmail,
  randPassword,
  randBook,
  randNumber,
  randProductDescription,
  randUserName,
} from '@ngneat/falso';
import { BookStateEnum, BookCategoryEnum, UserRoleEnum } from '../src/graphql/enums';

(async () => {
  const prisma = new PrismaClient();
  const userRoles = Object.keys(UserRoleEnum) as UserRoleEnum[];
  const bookStates = Object.keys(BookStateEnum) as BookStateEnum[];
  const bookCategories = Object.keys(BookCategoryEnum) as BookCategoryEnum[];

  userRoles.forEach(async userRole => {
    await prisma.userRole.upsert({
      where: {
        name: userRole,
      },
      update: {},
      create: {
        name: userRole,
        description: randProductDescription(),
      },
    });
  });

  bookStates.forEach(async bookState => {
    await prisma.bookState.upsert({
      where: {
        name: bookState as BookStateEnum,
      },
      update: {},
      create: {
        name: bookState as BookStateEnum,
        description: randProductDescription(),
      },
    });
  });

  bookCategories.forEach(async bookCategory => {
    await prisma.bookCategory.upsert({
      where: {
        name: bookCategory,
      },
      update: {},
      create: {
        name: bookCategory,
        description: randProductDescription(),
      },
    });
  });

  [...Array(10)].forEach(async () =>
    prisma.user.upsert({
      where: {
        username: randUserName(),
      },
      update: {},
      create: {
        username: randUserName(),
        email: randEmail(),
        password: randPassword(),
        userRoleName: UserRoleEnum.ADMIN,
      },
    }),
  );

  [...Array(200)].forEach(async () =>
    prisma.user.upsert({
      where: {
        username: randUserName(),
      },
      update: {},
      create: {
        username: randUserName(),
        email: randEmail(),
        password: randPassword(),
        userRoleName: UserRoleEnum.USER,
      },
    }),
  );

  const users = await prisma.user.findMany({});

  users.forEach(async ({ id }) =>
    [...Array(10)].forEach(async () => {
      const bookStateRand = randNumber({ min: 0, max: bookStates.length - 1 });
      const bookCategoryRand = randNumber({ min: 0, max: bookCategories.length - 1 });
      await prisma.book.create({
        data: {
          userId: id,
          name: randBook().title,
          description: randProductDescription(),
          author: randBook().author,
          bookStateName: bookStates[bookStateRand],
          bookCategoryName: bookCategories[bookCategoryRand],
        },
      });
    }),
  );
})();
