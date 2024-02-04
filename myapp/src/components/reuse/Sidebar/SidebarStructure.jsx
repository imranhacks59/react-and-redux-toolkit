const sidebarStructure = [
    {
      id: "dashboard",
      title: "Dasboard",
      name: "dasbor",
      parent: true,
      icon: "dasbor",
      link: "/dashboard"
    },
    {
      id: "inventory",
      title: "Inventory",
      name: "inventory",
      parent: true,
      icon: "transaksi",
      child: [
        {
          id: "inventorylist",
          title: "Inventory List",
          name: "inventorylist",
          link: "/inventorylist",
          icon: "dot"
        }
      ]
    },
    {
      id: "po",
      title: "Purchase Order",
      name: "po",
      parent: true,
      icon: "perusahaan",
      child: [
       
        {
          id: "pl",
          title: "Purchase list",
          name: "pl",
          link: "/pl",
          icon: "dot",
          child: [
            {
              id: "ol",
              title: "order List",
              name: "ol",
              link: "/ol",
              icon: "dot"
            },
            {
              id: "item-l",
              title: "Item List",
              name: "item-l",
              link: "/item-l",
              icon: "dot"
            }
          ]
        },
      
      ]
    },
   
  ];
  
  export { sidebarStructure };
  