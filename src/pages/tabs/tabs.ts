import { Component } from '@angular/core';

import {RandomQuestionsPage} from "../randomQuestions/randomQuestions";
import {AnswerTabsPage} from "../answerTabs/answerTabs";
import {NavController} from "ionic-angular";
import {EnterQuestionPage} from "../enterQuestion/enterQuestion";
import {SearchQuestionsPage} from "../searchQuestions/searchQuestions";
import {MainMenuPage} from "../mainMenu/mainMenu";
import {TrendingQuestionsPage} from "../trendingQuestions/trendingQuestions";
import {SettingsPage} from "../settings/settings";
import {NewsPage} from "../news/news";
import {MyQuestionsPage} from "../myQuestions/myQuestions";
import {AnsweredQuestionsPage} from "../answeredQuestions/answeredQuestions";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = RandomQuestionsPage;
  tab2Root = MainMenuPage;
  tab3Root = SearchQuestionsPage;

  constructor(public navCtrl: NavController) {

  }
}