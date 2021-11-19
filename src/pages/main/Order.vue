<template>
  <div class="container">
    <el-table
      :data="
        tableData.filter(
          (data) =>
            !search || data.name.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width: 100%"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="书名" prop="name"> </el-table-column>
      <el-table-column label="订单状态" prop="zhuangtai"> </el-table-column>
      <el-table-column label="商品数量" prop="shuliang"> </el-table-column>
      <el-table-column label="订单总价" prop="sum"> </el-table-column>
      <el-table-column align="right">
        <template slot="header">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
          <el-button
            size="mini"
            type="primary"
            @click="handleEdit(scope.$index, scope.row)"
            >提交</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: "001",
          name: "世界历史",
          zhuangtai: "运输中",
          shuliang: "2",
          sum: "56",
        },
        {
          id: "002",
          name: "网站设计与建设",
          zhuangtai: "运输中",
          shuliang: "2",
          sum: "56",
        },
        {
          id: "003",
          name: "css权威指南",
          zhuangtai: "运输中",
          shuliang: "2",
          sum: "56",
        },
        {
          id: "004",
          name: "JavaScript程序设计",
          zhuangtai: "运输中",
          shuliang: "2",
          sum: "56",
        },
        {
          id: "005",
          name: "jQuery前端开发",
          zhuangtai: "运输中",
          shuliang: "2",
          sum: "56",
        },
        {
          id: "006",
          name: "bootstrap实战",
          zhuangtai: "运输中",
          shuliang: "2",
          sum: "56",
        },
        {
          id: "007",
          name: "vue.js 3.0",
          zhuangtai: "运输中",
          shuliang: "2",
          sum: "56",
        },
        {
          id: "008",
          name: "高性能MySQL",
          zhuangtai: "运输中",
          shuliang: "2",
          sum: "56",
        },
      ],
      search: "",
    };
  },
  methods: {
    handleEdit(index, row) {
      alert(row.name);
    },
    handleDelete(index) {
      this.tableData.splice(index, 1);
    },
  },
};
</script>
