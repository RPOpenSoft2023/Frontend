const ColumnData=[
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        sorter: (a, b) => a.date > b.date ? 1 : a.date < b.date ? -1 : 0,
        ellipsis: true,
    },
    {
      title: 'Description',
      dataIndex: 'desc',
      key: 'desc',
      sorter: (a, b) => a.desc < b.desc,
      ellipsis: true,
    },
    {
      title: 'Debit',
      dataIndex: 'debit',
      key: 'debit',
      sorter: (a, b) => a.debit - b.debit,
      ellipsis: true,
    },
    {
      title: 'Credit',
      dataIndex: 'credit',
      key: 'credit',
      sorter: (a, b) => a.credit - b.credit,
      ellipsis: true,
    },
    {
      title: 'Balance',
      dataIndex: 'balance',
      key: 'balance',
      sorter: (a, b) => a.balance - b.balance,
      ellipsis: true,
    },
]
export default ColumnData;