import specialAttacks from"../script.js";

test('Тест функции specialAttacks', () => {
    const person1 = {
        name:"person1",
        special: [
            {
                id: 1,
                name: 'Двойной выстрел',
                icon: 'http://...',
                description: 'Двойной выстрел наносит двойной урон'
              }, 
              {
                id: 2,
                name: 'Нокаутирующий удар',
                icon: 'http://...'
              },
              {
                id: 3,
                name: 'Обрыгивание',
                icon: 'http://...',
                description: 'Поливает противника оскорблениями'
              }
        ]
    };

    const expected = [
        { id: 3 },
        { name: 'Обрыгивание' },
        { icon: 'http://...' },
        { description: 'Поливает противника оскорблениями' }
      ]

    expect(specialAttacks(person1, 3)).toEqual(expected)
})

test('Тест функции specialAttacks', () => {
    const person1 = {
        name:"person1",
        special: [
            {
                id: 1,
                name: 'Двойной выстрел',
                icon: 'http://...',
                description: 'Двойной выстрел наносит двойной урон'
              }, 
              {
                id: 2,
                name: 'Нокаутирующий удар',
                icon: 'http://...'
              },
              {
                id: 3,
                name: 'Обрыгивание',
                icon: 'http://...',
                description: 'Поливает противника оскорблениями'
              }
        ]
    };

    const expected = [
        { id: 2 },
        { name: 'Нокаутирующий удар' },
        { icon: 'http://...' },
        { description: 'Описание недоступно' }
      ]

    expect(specialAttacks(person1, 2)).toEqual(expected)
})