module.exports = {
  up: async (queryInterface) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert('tasks', [
      {
        title: 'Task 1',
        task: 'Realizar a primeira tarefa',
        status: 'pendente',
      },
      {
        title: 'Task 2',
        task: 'Realizar a segunda tarefa',
        status: 'em andamento',
      },
      {
        title: 'Task 3',
        task: 'Realizar a terceira tarefa',
        status: 'concluída',
      },
      {
        title: 'Task 4',
        task: 'Realizar a quarta tarefa',
        status: 'concluída',
      },
    ], {});
  },

  down: async (queryInterface) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('tasks', null, {});
  },
};
