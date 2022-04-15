type TreeType = Array<TreeNode>;

type TreeNode = {
  key: string;
  title: string;
  children?: Array<TreeNode>;
};

export const tree: TreeType = [
    {
      key: "2",
      title: "Level 1",
      children: [
        {
          key: "1",
          title: "Level 2",
          children: [
            {
              key: "15",
              title: "Level 2 file",
            },
          ],
        },
        {
          key: "4",
          title: "Level 1 file",
        },
        {
          key: "6",
          title: "Level 2",
          children: [
            {
              key: "7",
              title: "Level 2 file",
            },
            {
              key: "8",
              title: "Level 3",
              children: [
                {
                  key: "10",
                  title: "Level 4",
                  children: [
                    {
                      key: "11",
                      title: "Level 4 file",
                      
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      key: "5",
      title: "Level 1",
      children: [
        {
          key: "3",
          title: "Level 1 file",
        },
      ],
    },
  ];