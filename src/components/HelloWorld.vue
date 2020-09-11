<template>
  <div class="hello">
    <!-- 头部 -->
    <div class="header">
      <i class="back iconfont">&#xe685;</i>
      <div class="title">
        <img src="../assets/盾牌.jpg" class="dunpai" />
        <span class="title-content">请假详情</span>
      </div>
      <div class="feedback">反馈</div>
    </div>
    <!-- 内容 -->
    <div class="main">
      <!-- 如何销假 -->
      <div class="how-to">
        <div class="doubt">?</div>
        <span>如何销假？</span>
        <i class="right-arrow iconfont">&#xe66c;</i>
      </div>
      <!-- 休假中 -->
      <div class="vacation">
        <div class="adopt">
          <div class="yes iconfont">&#xe605;</div>
          <p class="title">审批已通过</p>
        </div>
        <div class="on-vacation">
          <p>正在休假中</p>
        </div>
      </div>
      <!-- 请假类型 -->
      <div class="vocation-type">
        <div class="vocation-wrap">
          <div class="type layer">
            <span class="l1">
              <span>请假类型：</span>
              <span class="type-content">事假</span>
            </span>
            <span class="l2">
              <span>需要离校：</span>
              <span class="type-content">离校</span>
            </span>
          </div>
          <div class="rule layer">
            <div class="vocation-rule">销假规则：</div>
            <div class="rule-box">
              <span class="rule-content-1"
                >离校请假需要销假，非离校请假无需销假</span
              >&nbsp;
              <span class="rule-content-2">查看 &gt;</span>
            </div>
          </div>
          <div class="time layer">实际休假时间：-</div>
        </div>
      </div>
      <!-- 请假详情 -->
      <div class="details">
        <div class="titile">请假详情</div>
        <div class="details-card">
          <div class="details-box">
            <div class="apply">我的 请假申请</div>
            <div class="layer l1">
              <div class="left">开始时间：</div>
              <div class="right">09-09 08:00</div>
            </div>
            <div class="layer l2">
              <div class="left">结束时间：</div>
              <div class="right">09-09 20:00</div>
            </div>
            <div class="layer l3">
              <div class="left">审批流程：</div>
              <div class="right">
                <span>共2步</span> &nbsp;
                <span class="right-l-3">查看&gt;</span>
              </div>
            </div>
            <div class="layer l4">
              <div class="left left-l-4">紧急联系人：</div>
              <div class="right">17727262138</div>
            </div>
            <div class="layer l5">
              <div class="left">请假原因；</div>
              <div class="right">大四学生，需要出去实习</div>
            </div>
            <div class="layer l6">
              <div class="left">发起位置：</div>
              <div class="right right-l-6">中国广东惠州市惠城区演达大道46</div>
            </div>
            <div class="layer l7">
              <div class="left left-l-7">抄送人：</div>
              <div class="right">无</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 审批状态 -->
      <div class="approval-state">
        <div class="approval-title">审批状态</div>
        <div class="approvel-layer">
          <div class="layer apply">
            <div class="circle"></div>
            <div class="content">高炳健 - 发起申请</div>
            <div class="time">09-08 18:07</div>
          </div>
          <div class="vertical-line"></div>
          <div class="layer teacher">
            <div class="circle"></div>
            <div class="content">
              <span>一级：[班主任]张晓欢-审批</span>
              <span class="font-color">通过</span>
            </div>
            <div class="time">09-08 18:55</div>
          </div>
          <div class="vertical-line opinion-box">
            <div class="approval-opinion">审批意见：同意，注意安全</div>
          </div>
          <div class="layer instructor">
            <div class="circle"></div>
            <div class="content">
              <span>二级：[辅导员]黄丽嫦-审批</span>
              <span class="font-color">通过</span>
            </div>
            <div class="time">09-08 19:03</div>
          </div>
          <div class="none-line opinion-box">
            <div class="approval-opinion">审批意见：注意安全</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="footer">
      <div class="cancel-holiday block">去销假</div>
      <div class="forward block">转发</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {}
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../style/incon/iconfont.css";
.title {
  color: #000;
  font-size: 16px;
}

.layer {
  color: #adb1b5;
}

/* 头部 */
.header {
  box-sizing: border-box;
  height: 50px;
  width: 100%;
  // border: 1px solid black;
  display: flex;
  line-height: 50px;
  padding: 0 10px;
  /* 返回 */
  .back {
    font-size: 32px;
  }
  /* 标题 */
  .title {
    flex: 1;
    position: relative;
  }
  /* 回馈 */
  .feedback {
    color: #8be2e0;
    font-size: 16px;
  }
  /* 盾牌 */
  .dunpai {
    display: inline-block;
    height: 28px;
    position: absolute;
    top: 10px;
    left: 87px;
  }
  .title-content {
    position: absolute;
    font-weight: bold;
    font-size: 20px;
    right: 90px;
  }
}

.main {
  width: 100%;
  height: 710px;
  box-sizing: border-box;
}

/* 如何销假 */
.how-to {
  background: #a0b8d4;
  width: 100%;
  height: 30px;
  font-weight: bold;
  font-size: 16px;
  color: #fff;
  line-height: 30px;
  position: relative;
  .doubt {
    position: absolute;
    top: 5px;
    left: 105px;
    display: inline-block;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    font-size: 16px;
    line-height: 20px;
    background: #fff;
    color: #a0b8d4;
  }
  .right-arrow {
    font-size: 18px;
  }
}

/* 销假中 */
.vacation {
  width: 100%;
  height: 110px;
  background-image: linear-gradient(#01ad5b, #00d76e);
  color: #fff;
  position: relative;
  .adopt {
    position: absolute;
    top: 24px;
    left: 0;
    right: 0;
    .yes {
      display: inline-block;
      border-radius: 50%;
      height: 20px;
      width: 20px;
      background: #fff;
      color: #01ad5b;
      font-size: 20px;
      margin-right: 5px;
      line-height: 20px;
    }
    p {
      margin: 0;
      display: inline-block;
    }
    .title {
      color: #fff;
      margin: 0;
      letter-spacing: 5px;
    }
  }
  .on-vacation {
    position: absolute;
    top: 20px;
    left: 0;
    right: 0;
    letter-spacing: 8px;
    font-size: 30px;
  }
}

/* 销假类型 */
.vocation-type {
  width: 100%;
  height: 100px;
  text-align: left;
  .vocation-wrap {
    margin: 5px 14px;
    font-size: 14px;
    .layer.type {
      margin-bottom: 10px;
      color: #adb1b5;
      .l2 {
        margin-left: 50px;
      }
      .type-content {
        color: #000;
      }
    }
    .rule {
      display: flex;
      .vocation-rule {
        display: inline-block;
        height: 40px;
        width: 80px;
      }
      .rule-box {
        display: inline-block;
        .rule-content-1 {
          color: #f3b34a;
        }
        .rule-content-2 {
          color: #5caaef;
        }
      }
    }
  }
}

/* 销假详情 */
.details {
  height: 240px;
  width: 100%;
  background-color: #f4f8fb;
  .titile {
    width: 100%;
    height: 30px;
    color: #adb1b5;
    text-align: left;
    line-height: 30px;
    margin: 0 14px;
    font-size: 14px;
  }
  .details-card {
    background: #fff;
    height: 175px;
    padding: 12px 14px;
    text-align: left;
    font-size: 15px;
    .apply {
      margin-bottom: 10px;
    }
    .details-box {
      .layer {
        font-size: 14px;
        margin-bottom: 0;
        display: flex;
        .left {
          margin-right: 30px;
        }
        .right {
          color: #000;
        }
        .right-l-3 {
          color: #5caaef;
        }
        .left-l-4 {
          margin-right: 15px;
        }
        .right-l-6 {
          color: #5caaef;
        }
        .left-l-7 {
          margin-right: 45px;
        }
      }
      .l5 {
        margin-bottom: 10px;
      }
    }
  }
}

/* 审批状态 */
.approval-state {
  height: 210px;
  padding: 12px 14px;
  text-align: left;
  .approval-title {
    font-size: 15px;
  }
  .approvel-layer {
    margin-left: 10px;
    margin-top: 5px;
    .circle {
      height: 14px;
      width: 14px;
      border-radius: 50%;
      border: 1px solid #6ce3b4;
    }
    .content {
      margin-left: 5px;
      .font-color {
        color: #6ce3b4;
      }
    }
    .time {
      height: 17px;
      line-height: 17px;
    }
    .layer {
      display: flex;
      font-size: 13px;
      color: #adb1b5;
    }
    .apply {
      .circle {
        border: 1px solid #4599e8;
      }

      .time {
        margin-left: 144px;
      }
    }
    .vertical-line {
      height: 10px;
      width: 310px;
      margin-left: 7px;
      border-left: 1px solid #adb1b5;
    }
    .teacher {
      .time {
        margin-left: 66px;
      }
    }
    .instructor {
      .time {
        margin-left: 66px;
      }
    }
    .opinion-box {
      padding: 11px 14px;
      height: 31px;
      .approval-opinion {
        font-size: 14px;
        color: #adb1b5;
        line-height: 30px;
        padding-left: 10px;
        height: 30px;
        border: 1px solid #adb1b5;
        border-radius: 5px;
        background: #f4f8fb;
      }
    }
    .none-line {
      height: 10px;
      width: 310px;
      margin-left: 8px;
    }
  }
}

/* 底部 */
.footer {
  background: #f4f8fb;
  height: 200px;
  padding: 15px 20px;
  .block {
    margin: 7px 0;
    height: 35px;
    border: 1px solid #adb1b5;
    line-height: 35px;
    background: #fff;
    font-size: 14px;
    border-radius: 5px;
  }
  .cancel-holiday {
    background: #4583f4;
    color: #fff;
  }
}
</style>
