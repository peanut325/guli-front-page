<template>
  <div id="aCoursesList" class="bg-fa of">
    <!-- 讲师列表 开始 -->
    <section class="container">
      <header class="comm-title all-teacher-title">
        <h2 class="fl tac">
          <span class="c-333">全部讲师</span>
        </h2>
        <section class="c-tab-title">
          <a id="subjectAll" title="全部" href="#">全部</a>
          <!-- <c:forEach var="subject" items="${subjectList }">
                            <a id="${subject.subjectId}" title="${subject.subjectName }" href="javascript:void(0)" onclick="submitForm(${subject.subjectId})">${subject.subjectName }</a>
          </c:forEach>-->
        </section>
      </header>
      <section class="c-sort-box unBr">
        <div>
          <!-- /无数据提示 开始-->
          <section class="no-data-wrap" v-if="data.pageTeacherInfo.total == 0">
            <em class="icon30 no-data-ico">&nbsp;</em>
            <span class="c-666 fsize14 ml10 vam"
              >没有相关数据，小编正在努力整理中...</span
            >
          </section>
          <!-- /无数据提示 结束-->
          <!-- /数据列表 开始-->
          <article v-if="data.pageTeacherInfo.total > 0" class="i-teacher-list">
            <ul class="of">
              <li v-for="item in data.pageTeacherInfo.records" :key="item.id">
                <section class="i-teach-wrap">
                  <div class="i-teach-pic">
                    <a :href="'/teacher/' + item.id" :title="item.name">
                      <img
                        :src="item.avatar"
                        :alt="item.name"
                        height="142"
                        hright="142"
                      />
                    </a>
                  </div>
                  <div class="mt10 hLh30 txtOf tac">
                    <a
                      :href="'/teacher/' + item.id"
                      :title="item.name"
                      class="fsize18 c-666"
                      >{{ item.name }}</a
                    >
                  </div>
                  <div class="hLh30 txtOf tac">
                    <span class="fsize14 c-999">{{ item.career }}</span>
                  </div>
                  <div class="mt15 i-q-txt">
                    <p class="c-999 f-fA">{{ item.intro }}</p>
                  </div>
                </section>
              </li>
            </ul>
            <div class="clear" />
          </article>
          <!-- /数据列表 结束-->
        </div>
        <!-- 公共分页 开始 -->
        <div>
          <div class="paging">
            <!-- undisable这个class是否存在，取决于数据属性hasPrevious -->
            <a
              :class="{ undisable: !data.hasPrevious }"
              href="#"
              title="首页"
              @click.prevent="gotoPage(1)"
              >首</a
            >
            <a
              :class="{ undisable: !data.hasPrevious }"
              href="#"
              title="前一页"
              @click.prevent="gotoPage(data.pageTeacherInfo.current - 1)"
              >&lt;</a
            >
            <a
              v-for="page in data.pageTeacherInfo.pages"
              :key="page"
              :class="{
                current: data.current == page,
                undisable: data.current == page,
              }"
              :title="'第' + page + '页'"
              href="#"
              @click.prevent="gotoPage(page)"
              >{{ page }}</a
            >
            <a  
              :class="{ undisable: !data.hasNext }"
              href="#"
              title="后一页"
              @click.prevent="gotoPage(data.pageTeacherInfo.current + 1)"
              >&gt;</a
            >
            <a
              :class="{ undisable: !data.hasNext }"
              href="#"
              title="末页"
              @click.prevent="gotoPage(data.pageTeacherInfo.pages)"
              >末</a
            >
            <div class="clear" />
          </div>
        </div>
        <!-- 公共分页 结束 -->
      </section>
    </section>
    <!-- /讲师列表 结束 -->
  </div>
</template>
<script>
import teacher from "@/api/teacher/teacher.js";

export default {
  // 异步调用，只调用一次，用来代替created( )
  // params相当于之前this.$route.params.id，error为错误信息
  asyncData({ params, error }) {
    // return调用方法，不能有回车
    return teacher.getPageTeacher(1, 8).then((response) => {
      // 相当于定于和赋值
      return { data: response.data.data };
    });
  },
  methods: {
    gotoPage(page) {
      // 大于等于总页数时，赋值为总页数进行查询
      if (page >= this.data.pageTeacherInfo.pages) {
        page = this.data.pageTeacherInfo.pages;
      }
      // 调用按照页码查询接口
      teacher.getPageTeacher(page, 8).then((response) => {
        this.data = response.data.data;
      });
    },
  },
};
</script>