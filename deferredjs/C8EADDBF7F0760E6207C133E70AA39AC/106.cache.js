$wnd.hal.runAsyncCallback106("defineClass(1810, 1, {1:1});\n_.com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection_______________________________________________________________________________ = function com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection_______________________________________________________________________________(invokee, _0){\n  invokee.automaticBind(_0);\n}\n;\nfunction $clinit_TransactionsPresenter(){\n  $clinit_TransactionsPresenter = emptyMethod;\n  $clinit_ApplicationFinderPresenter();\n}\n\nfunction TransactionsPresenter(eventBus, view, myProxy, finder, dispatcher, finderPathFactory, statementContext, resources){\n  $clinit_TransactionsPresenter();\n  ApplicationFinderPresenter.call(this, eventBus, view, myProxy, finder);\n  this.$init_1998();\n  this.dispatcher_0 = dispatcher;\n  this.finderPathFactory = finderPathFactory;\n  this.statementContext_0 = statementContext;\n  this.resources = resources;\n}\n\ndefineClass(753, 132, {53:1, 46:1, 1:1, 26:1, 7:1, 753:1, 92:1, 77:1}, TransactionsPresenter);\n_.$init_1998 = function $init_1998(){\n}\n;\n_.lambda$0_265 = function lambda$0_431(result_0){\n  $clinit_TransactionsPresenter();\n  {\n    castTo(this.getView(), 6357).update_15(asNamedNodes(result_0.asPropertyList()));\n  }\n}\n;\n_.lambda$1_197 = function lambda$1_316(result_0){\n  $clinit_TransactionsPresenter();\n  {\n    this.reload_0();\n  }\n}\n;\n_.finderPath = function finderPath_66(){\n  return this.finderPathFactory.runtimeServerPath().append_22('rss', 'transactions', this.resources.constants_0().monitor(), 'Transaction');\n}\n;\n_.onBind = function onBind_66(){\n  getClassPrototype(74).onBind.call(this);\n  castTo(this.getView(), 6357).setPresenter(this);\n}\n;\n_.probe = function probe(){\n  var address, operation;\n  address = ($clinit_AddressTemplates_27() , LOGSTORE_RUNTIME_TEMPLATE).resolve(this.statementContext_0);\n  operation = (new Operation$Builder(address, 'probe')).build();\n  this.dispatcher_0.execute_20(operation, new TransactionsPresenter$lambda$1$Type(this));\n}\n;\n_.reload_0 = function reload_79(){\n  var address, operation;\n  address = ($clinit_AddressTemplates_27() , TRANSACTIONS_LOGSTORE_RUNTIME_TEMPLATE).resolve(this.statementContext_0);\n  operation = (new Operation$Builder(address, 'read-resource')).param_3('include-runtime', true).param_3('recursive', true).build();\n  this.dispatcher_0.execute_20(operation, new TransactionsPresenter$lambda$0$Type(this));\n}\n;\n_.resourceAddress = function resourceAddress_48(){\n  return ($clinit_AddressTemplates_27() , TRANSACTIONS_LOGSTORE_RUNTIME_TEMPLATE).resolve(this.statementContext_0);\n}\n;\nfunction $clinit_TransactionsPresenter$MyView(){\n  $clinit_TransactionsPresenter$MyView = emptyMethod;\n}\n\nvar Lorg_jboss_hal_client_runtime_subsystem_transaction_TransactionsPresenter$MyView_2_classLit = createForInterface('org.jboss.hal.client.runtime.subsystem.transaction', 'TransactionsPresenter/MyView');\nfunction $clinit_TransactionsPresenter$lambda$0$Type(){\n  $clinit_TransactionsPresenter$lambda$0$Type = emptyMethod;\n}\n\nfunction TransactionsPresenter$lambda$0$Type($$outer_0){\n  $clinit_TransactionsPresenter$lambda$0$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(2648, 1, {1:1, 10:1}, TransactionsPresenter$lambda$0$Type);\n_.accept_0 = function accept_453(arg0){\n  this.$$outer_0.lambda$0_265(arg0);\n}\n;\nvar Lorg_jboss_hal_client_runtime_subsystem_transaction_TransactionsPresenter$lambda$0$Type_2_classLit = createForClass('org.jboss.hal.client.runtime.subsystem.transaction', 'TransactionsPresenter/lambda$0$Type', 2648, Ljava_lang_Object_2_classLit);\nfunction $clinit_TransactionsPresenter$lambda$1$Type(){\n  $clinit_TransactionsPresenter$lambda$1$Type = emptyMethod;\n}\n\nfunction TransactionsPresenter$lambda$1$Type($$outer_0){\n  $clinit_TransactionsPresenter$lambda$1$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(2649, 1, {1:1, 10:1}, TransactionsPresenter$lambda$1$Type);\n_.accept_0 = function accept_454(arg0){\n  this.$$outer_0.lambda$1_197(arg0);\n}\n;\nvar Lorg_jboss_hal_client_runtime_subsystem_transaction_TransactionsPresenter$lambda$1$Type_2_classLit = createForClass('org.jboss.hal.client.runtime.subsystem.transaction', 'TransactionsPresenter/lambda$1$Type', 2649, Ljava_lang_Object_2_classLit);\nfunction $clinit_TransactionsView(){\n  $clinit_TransactionsView = emptyMethod;\n  $clinit_HalViewImpl();\n  $clinit_HalView();\n}\n\nfunction TransactionsView(metadataRegistry, resources){\n  $clinit_TransactionsView();\n  var id_0, metadataPart, metadataTx, section, sectionParticipants, txPageId;\n  HalViewImpl.call(this);\n  this.$init_2003();\n  metadataTx = metadataRegistry.lookup_3(($clinit_AddressTemplates_27() , TRANSACTIONS_LOGSTORE_RUNTIME_TEMPLATE));\n  this.transactionsTable = castTo(castTo(castTo(castTo((new ModelNodeTable$Builder(build_29('transactions', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {3:1, 1:1, 4:1, 6:1}, 2, 6, ['table'])), metadataTx)).button_2(resources.constants_0().probe_0(), makeLambdaFunction(TransactionsView$lambda$0$Type.prototype.execute_7, TransactionsView$lambda$0$Type, [this])), 9).button_2(resources.constants_0().reload_14(), makeLambdaFunction(TransactionsView$lambda$1$Type.prototype.execute_7, TransactionsView$lambda$1$Type, [this])), 9).column_6('Transaction', makeLambdaFunction(TransactionsView$lambda$2$Type.prototype.render_2, TransactionsView$lambda$2$Type, [])), 9).column_11(new InlineAction('Participants', makeLambdaFunction(TransactionsView$0methodref$showParticipants$Type.prototype.action_5, TransactionsView$0methodref$showParticipants$Type, [this])), '20em'), 9).build();\n  this.transactionsForm = (new ModelNodeForm$Builder(build_29('transactions', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {3:1, 1:1, 4:1, 6:1}, 2, 6, ['form'])), metadataTx)).includeRuntime().readOnly().build();\n  section = castTo(castTo(castTo(castTo(section_0().add_18(castTo(h_0(1).textContent_0('Transactions'), 7)), 5).add_18(castTo(p_2().textContent_0(metadataTx.description.description), 7)), 5).add_18(this.transactionsTable), 5).add_18(this.transactionsForm), 5).asElement_0();\n  metadataPart = metadataRegistry.lookup_3(($clinit_AddressTemplates_27() , PARTICIPANTS_LOGSTORE_RUNTIME_TEMPLATE));\n  this.participantsTable = castTo((new ModelNodeTable$Builder(build_29('partitcipants', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {3:1, 1:1, 4:1, 6:1}, 2, 6, ['table'])), metadataPart)).column_6('Participant', makeLambdaFunction(TransactionsView$lambda$3$Type.prototype.render_2, TransactionsView$lambda$3$Type, [])), 9).build();\n  this.participantsForm = (new ModelNodeForm$Builder(build_29('partitcipants', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {3:1, 1:1, 4:1, 6:1}, 2, 6, ['form'])), metadataPart)).includeRuntime().readOnly().build();\n  sectionParticipants = castTo(castTo(castTo(castTo(section_0().add_18(castTo(h_0(1).textContent_0('Participant'), 7)), 5).add_18(castTo(p_2().textContent_0(metadataPart.description.description), 7)), 5).add_18(this.participantsTable), 5).add_18(this.participantsForm), 5).asElement_0();\n  id_0 = build_29('transactions', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {3:1, 1:1, 4:1, 6:1}, 2, 6, ['pages']));\n  txPageId = build_29('transactions', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {3:1, 1:1, 4:1, 6:1}, 2, 6, ['page']));\n  this.pages = new Pages(id_0, txPageId, section);\n  this.pages.addPage_0(txPageId, 'transaction-Participants-page', new TransactionsView$lambda$4$Type(this), new TransactionsView$lambda$5$Type, sectionParticipants);\n  this.registerAttachable(this.transactionsTable, stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_ballroom_Attachable_2_classLit, 1), {3:1, 1:1, 4:1}, 8, 0, [this.transactionsForm, this.participantsTable, this.participantsForm]));\n  this.initElement_0(castTo(row_4().add_18(castTo(column_7().addAll_8([section, sectionParticipants]), 7)), 7));\n}\n\nfunction lambda$2_260(cell_0, type_1, row_2, meta_3){\n  $clinit_TransactionsView();\n  return row_2.name;\n}\n\nfunction lambda$3_212(cell_0, type_1, row_2, meta_3){\n  $clinit_TransactionsView();\n  return row_2.name;\n}\n\nfunction lambda$5_153(){\n  $clinit_TransactionsView();\n  return 'Participants';\n}\n\ndefineClass(4094, 51, {1:1, 26:1, 7:1, 6357:1, 40:1}, TransactionsView);\n_.$init_2003 = function $init_2003(){\n}\n;\n_.lambda$0_266 = function lambda$0_433(table_0){\n  $clinit_TransactionsView();\n  this.presenter.probe();\n}\n;\n_.lambda$1_199 = function lambda$1_318(table_0){\n  $clinit_TransactionsView();\n  this.presenter.reload_0();\n}\n;\n_.lambda$4_139 = function lambda$4_183(){\n  $clinit_TransactionsView();\n  return 'Transaction' + ': ' + this.selectedTx;\n}\n;\n_.setPresenter = function setPresenter_117(presenter){\n  this.setPresenter_36(castTo(presenter, 753));\n}\n;\n_.attach_0 = function attach_114(){\n  getClassPrototype(51).attach_0.call(this);\n  this.transactionsTable.bindForm(this.transactionsForm);\n  this.participantsTable.bindForm(this.participantsForm);\n}\n;\n_.setPresenter_36 = function setPresenter_118(presenter){\n  this.presenter = presenter;\n}\n;\n_.showParticipants = function showParticipants(transactionNode){\n  $clinit_TransactionsView();\n  var participants;\n  this.selectedTx = transactionNode.name;\n  participants = asNamedNodes(transactionNode.asPropertyList());\n  this.participantsForm.clear();\n  this.participantsTable.update_4(participants);\n  this.pages.showPage('transaction-Participants-page');\n}\n;\n_.update_15 = function update_140(model){\n  this.transactionsForm.clear();\n  this.transactionsTable.update_4(model);\n}\n;\nvar Lorg_jboss_hal_client_runtime_subsystem_transaction_TransactionsView_2_classLit = createForClass('org.jboss.hal.client.runtime.subsystem.transaction', 'TransactionsView', 4094, Lorg_jboss_hal_core_mvp_HalViewImpl_2_classLit);\nfunction $clinit_TransactionsView$0methodref$showParticipants$Type(){\n  $clinit_TransactionsView$0methodref$showParticipants$Type = emptyMethod;\n}\n\nfunction TransactionsView$0methodref$showParticipants$Type($$outer_0){\n  $clinit_TransactionsView$0methodref$showParticipants$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(8275, $wnd.Function, {1:1, 161:1}, TransactionsView$0methodref$showParticipants$Type);\n_.action_5 = function action_31(arg0){\n  this.$$outer_0.showParticipants(castTo(arg0, 13));\n}\n;\nfunction $clinit_TransactionsView$lambda$0$Type(){\n  $clinit_TransactionsView$lambda$0$Type = emptyMethod;\n}\n\nfunction TransactionsView$lambda$0$Type($$outer_0){\n  $clinit_TransactionsView$lambda$0$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(8272, $wnd.Function, {1:1}, TransactionsView$lambda$0$Type);\n_.execute_7 = function execute_970(arg0){\n  this.$$outer_0.lambda$0_266(arg0);\n}\n;\nfunction $clinit_TransactionsView$lambda$1$Type(){\n  $clinit_TransactionsView$lambda$1$Type = emptyMethod;\n}\n\nfunction TransactionsView$lambda$1$Type($$outer_0){\n  $clinit_TransactionsView$lambda$1$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(8273, $wnd.Function, {1:1}, TransactionsView$lambda$1$Type);\n_.execute_7 = function execute_971(arg0){\n  this.$$outer_0.lambda$1_199(arg0);\n}\n;\nfunction $clinit_TransactionsView$lambda$2$Type(){\n  $clinit_TransactionsView$lambda$2$Type = emptyMethod;\n}\n\nfunction TransactionsView$lambda$2$Type(){\n  $clinit_TransactionsView$lambda$2$Type();\n}\n\ndefineClass(8274, $wnd.Function, {1:1}, TransactionsView$lambda$2$Type);\n_.render_2 = function render_209(arg0, arg1, arg2, arg3){\n  return lambda$2_260(arg0, arg1, arg2, arg3);\n}\n;\nfunction $clinit_TransactionsView$lambda$3$Type(){\n  $clinit_TransactionsView$lambda$3$Type = emptyMethod;\n}\n\nfunction TransactionsView$lambda$3$Type(){\n  $clinit_TransactionsView$lambda$3$Type();\n}\n\ndefineClass(8276, $wnd.Function, {1:1}, TransactionsView$lambda$3$Type);\n_.render_2 = function render_210(arg0, arg1, arg2, arg3){\n  return lambda$3_212(arg0, arg1, arg2, arg3);\n}\n;\nfunction $clinit_TransactionsView$lambda$4$Type(){\n  $clinit_TransactionsView$lambda$4$Type = emptyMethod;\n}\n\nfunction TransactionsView$lambda$4$Type($$outer_0){\n  $clinit_TransactionsView$lambda$4$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(4095, 1, {1:1, 27:1}, TransactionsView$lambda$4$Type);\n_.get_0 = function get_467(){\n  return this.$$outer_0.lambda$4_139();\n}\n;\nvar Lorg_jboss_hal_client_runtime_subsystem_transaction_TransactionsView$lambda$4$Type_2_classLit = createForClass('org.jboss.hal.client.runtime.subsystem.transaction', 'TransactionsView/lambda$4$Type', 4095, Ljava_lang_Object_2_classLit);\nfunction $clinit_TransactionsView$lambda$5$Type(){\n  $clinit_TransactionsView$lambda$5$Type = emptyMethod;\n}\n\nfunction TransactionsView$lambda$5$Type(){\n  $clinit_TransactionsView$lambda$5$Type();\n}\n\ndefineClass(4096, 1, {1:1, 27:1}, TransactionsView$lambda$5$Type);\n_.get_0 = function get_468(){\n  return lambda$5_153();\n}\n;\nvar Lorg_jboss_hal_client_runtime_subsystem_transaction_TransactionsView$lambda$5$Type_2_classLit = createForClass('org.jboss.hal.client.runtime.subsystem.transaction', 'TransactionsView/lambda$5$Type', 4096, Ljava_lang_Object_2_classLit);\ndefineClass(2096, 1, {1:1});\n_.get_Key$type$org$jboss$hal$client$runtime$subsystem$transaction$TransactionsPresenter$MyView$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$runtime$subsystem$transaction$TransactionsPresenter$MyView$_annotation$$none$$(){\n  var result;\n  result = this.get_Key$type$org$jboss$hal$client$runtime$subsystem$transaction$TransactionsView$_annotation$$none$$();\n  return result;\n}\n;\n_.get_Key$type$org$jboss$hal$client$runtime$subsystem$transaction$TransactionsPresenter$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$runtime$subsystem$transaction$TransactionsPresenter$_annotation$$none$$(){\n  var result;\n  if (isNull(this.singleton_Key$type$org$jboss$hal$client$runtime$subsystem$transaction$TransactionsPresenter$_annotation$$none$$)) {\n    result = this.org$jboss$hal$client$runtime$subsystem$transaction$TransactionsPresenter_org$jboss$hal$client$runtime$subsystem$transaction$TransactionsPresenter_methodInjection(this.injector.getFragment_com_google_web_bindery_event_shared().get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$(), this.get_Key$type$org$jboss$hal$client$runtime$subsystem$transaction$TransactionsPresenter$MyView$_annotation$$none$$(), this.get_Key$type$org$jboss$hal$client$runtime$subsystem$transaction$TransactionsPresenter$MyProxy$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$Finder$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_dmr_dispatch().get_Key$type$org$jboss$hal$dmr$dispatch$Dispatcher$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$FinderPathFactory$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_meta().get_Key$type$org$jboss$hal$meta$StatementContext$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_resources().get_Key$type$org$jboss$hal$resources$Resources$_annotation$$none$$());\n    this.memberInject_Key$type$org$jboss$hal$client$runtime$subsystem$transaction$TransactionsPresenter$_annotation$$none$$(result);\n    this.singleton_Key$type$org$jboss$hal$client$runtime$subsystem$transaction$TransactionsPresenter$_annotation$$none$$ = result;\n  }\n  return this.singleton_Key$type$org$jboss$hal$client$runtime$subsystem$transaction$TransactionsPresenter$_annotation$$none$$;\n}\n;\n_.get_Key$type$org$jboss$hal$client$runtime$subsystem$transaction$TransactionsView$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$runtime$subsystem$transaction$TransactionsView$_annotation$$none$$(){\n  var result;\n  if (isNull(this.singleton_Key$type$org$jboss$hal$client$runtime$subsystem$transaction$TransactionsView$_annotation$$none$$)) {\n    result = this.org$jboss$hal$client$runtime$subsystem$transaction$TransactionsView_org$jboss$hal$client$runtime$subsystem$transaction$TransactionsView_methodInjection(this.injector.getFragment_org_jboss_hal_meta().get_Key$type$org$jboss$hal$meta$MetadataRegistry$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_resources().get_Key$type$org$jboss$hal$resources$Resources$_annotation$$none$$());\n    this.memberInject_Key$type$org$jboss$hal$client$runtime$subsystem$transaction$TransactionsView$_annotation$$none$$(result);\n    this.singleton_Key$type$org$jboss$hal$client$runtime$subsystem$transaction$TransactionsView$_annotation$$none$$ = result;\n  }\n  return this.singleton_Key$type$org$jboss$hal$client$runtime$subsystem$transaction$TransactionsView$_annotation$$none$$;\n}\n;\n_.memberInject_Key$type$org$jboss$hal$client$runtime$subsystem$transaction$TransactionsPresenter$_annotation$$none$$ = function memberInject_Key$type$org$jboss$hal$client$runtime$subsystem$transaction$TransactionsPresenter$_annotation$$none$$(injectee){\n  this.injector.getFragment_com_gwtplatform_mvp_client().com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection_______________________________________________________________________________(injectee, this.injector.getFragment_com_gwtplatform_mvp_client().get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$());\n}\n;\n_.memberInject_Key$type$org$jboss$hal$client$runtime$subsystem$transaction$TransactionsView$_annotation$$none$$ = function memberInject_Key$type$org$jboss$hal$client$runtime$subsystem$transaction$TransactionsView$_annotation$$none$$(injectee){\n}\n;\n_.org$jboss$hal$client$runtime$subsystem$transaction$TransactionsPresenter_org$jboss$hal$client$runtime$subsystem$transaction$TransactionsPresenter_methodInjection = function org$jboss$hal$client$runtime$subsystem$transaction$TransactionsPresenter_org$jboss$hal$client$runtime$subsystem$transaction$TransactionsPresenter_methodInjection(_0, _1, _2, _3, _4, _5, _6, _7){\n  return new TransactionsPresenter(_0, _1, _2, _3, _4, _5, _6, _7);\n}\n;\n_.org$jboss$hal$client$runtime$subsystem$transaction$TransactionsView_org$jboss$hal$client$runtime$subsystem$transaction$TransactionsView_methodInjection = function org$jboss$hal$client$runtime$subsystem$transaction$TransactionsView_org$jboss$hal$client$runtime$subsystem$transaction$TransactionsView_methodInjection(_0, _1){\n  return new TransactionsView(_0, _1);\n}\n;\ndefineClass(2098, 1, {41:1, 1:1});\n_.onSuccess_2 = function onSuccess_226(){\n  this.val$callback2.onSuccess_1(this.this$11.this$01.get_Key$type$org$jboss$hal$client$runtime$subsystem$transaction$TransactionsPresenter$_annotation$$none$$());\n}\n;\ndefineClass(145, 1, {1:1, 151:1});\n_.probe_0 = function probe_0(){\n  return 'Probe';\n}\n;\n$entry(onLoad_1)(106);\n\n//# sourceURL=hal-106.js\n")