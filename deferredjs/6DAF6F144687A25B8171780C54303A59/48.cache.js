$wnd.hal.runAsyncCallback48("function tch(){tch=sGc;wBe();sch=(new lv).Rg((Pah(),Eah),(new Pmk(new XTe,Dsd(N3(z3(Nib,1),{4:1,1:1,5:1,6:1},2,6,['scale-down','scale-down-cluster-name','scale-down-connectors','scale-down-discovery-group','scale-down-group-name'])))).Uvc()).Rg((Pah(),Fah),(new Pmk(new XTe,Dsd(N3(z3(Nib,1),{4:1,1:1,5:1,6:1},2,6,['backup-port-offset','backup-request-retries','backup-request-retry-interval','max-backups'])))).Uvc()).Rg((Pah(),Iah),(new Pmk(new XTe,Dsd(N3(z3(Nib,1),{4:1,1:1,5:1,6:1},2,6,['cluster-name','group-name'])))).Uvc()).Rg((Pah(),Jah),(new Pmk(new XTe,Dsd(N3(z3(Nib,1),{4:1,1:1,5:1,6:1},2,6,['cluster-name','group-name','scale-down-cluster-name','scale-down-connectors','scale-down-discovery-group','scale-down-group-name'])))).Uvc()).Rg((Pah(),Kah),(new Pmk(new XTe,Dsd(N3(z3(Nib,1),{4:1,1:1,5:1,6:1},2,6,['backup-port-offset','backup-request-retries','backup-request-retry-interval','max-backups'])))).Uvc()).Rg((Pah(),Nah),(new Pmk(new XTe,Utd('failover-on-server-shutdown'))).Uvc()).Rg((Pah(),Oah),(new Pmk(new XTe,Dsd(N3(z3(Nib,1),{4:1,1:1,5:1,6:1},2,6,['scale-down-cluster-name','scale-down-group-name','scale-down-connectors','scale-down-discovery-group'])))).Uvc()).Qg()}\nfunction vch(a,b){tch();var d;yBe.call(this,a.f);this.IEb();if(sch.containsKey(a)){d=m5(sch.get(a),105);this.u$().QM(d);d.Yvc(b)}}\nqGc(4938,34,{1:1,8:1,34:1},vch);_.IEb=function uch(){};var sch;var uVb=$fd('org.jboss.hal.client.configuration.subsystem.messaging','HaPolicyPreview',4938,stc);function Irh(){Irh=sGc;XCe()}\nfunction Krh(a,b,d,e,g,h,i,j){Irh();ZCe.call(this,(new dhk(a,'messaging-server-settings',j.f_c().TRc())).Vtc(new $rh).Ztc(new bsh).Xtc(new hsh(j)));this.SHb();this.b=e;this.a=g;this.c=j;this.I_(new ksh(this,i,h,b,d,j))}\nfunction Mrh(a,b,d){Irh();var e;{if(hkd(b.Ll(),(AFl(),fDl))){e=b.cwc().ld().bM(new zsh(a)).cM();e._J(new Fsh(b))}else{m5(b.cwc().getAtIndex(0),241).pvc().uW(b)}}}\nfunction Srh(a,b){Irh();return hkd(a.f_c().TSc(),b.Ml())}\nfunction Trh(a,b){Irh();b.pvc().uW(a)}\nfunction Urh(a){Irh();return hkd('messaging-server',a.fvc())}\nfunction Vrh(a){Irh();return a}\nqGc(3445,37,{1:1,13:1,37:1},Krh);_.SHb=function Jrh(){};_.UHb=function Nrh(a,b,d,e,g,h,i){Irh();var j,k,l,m,n;{k=new Xrd;l=POd(h.juc().kd(),false).bM(new Ish).cM().aK(new esh);if(l.Ob()){m=R8j(w5(l.Nb()),'messaging-server'+'-');n=new hjl(a,new Osh(m));j=(c5g(),R4g).resolve(n);b.Ppc(j,'ha-policy',new Rsh(this,k,d,e,m,g,n,i))}else{i.Fj(k)}}};_.VHb=function Orh(a,b){Irh();this.THb(a)};_.WHb=function Prh(a,b,d){Irh();this._Hb(a,b)};_.XHb=function Qrh(a,b,d){Irh();d.a.nEb(this.a,a,new Ush(this,d))};_.YHb=function Rrh(){Irh();this.x_((Ghk(),Fhk))};_.ZHb=function Wrh(a,b,d,e,g,h,i,j){Irh();var k,l,m;{a.add((new Vnk('Destinations')).jwc((AFl(),eDl)).hwc(b.Ivc(d.fBc('messaging-server-destination').SE('server',e).PE())).lwc(new zBe('Destinations',g.j_c().PYc())).iwc());a.add((new Vnk('Connections')).jwc((AFl(),dDl)).hwc(b.Ivc(d.fBc('messaging-server-connection').SE('server',e).PE())).lwc(new zBe('Connections',g.j_c().OYc())).iwc());a.add((new Vnk('Clustering')).jwc((AFl(),cDl)).hwc(b.Ivc(d.fBc('messaging-server-clustering').SE('server',e).PE())).lwc(new zBe('Clustering',g.j_c().NYc())).iwc());k=(new Vnk('HA Policy')).jwc((AFl(),fDl));if(j.isEmpty()){k.gwc(g.f_c().nMc(),new nsh(this,h)).hwc(b.Ivc(d.fBc('messaging-server-ha-policy').SE('server',e).PE())).lwc(new zBe('HA Policy',g.j_c().QYc()))}else{l=m5(j.getAtIndex(0),46);m=Vah(l.name);k.hwc(b.Ivc(d.fBc('messaging-server-ha-policy').SE('server',e).PE())).gwc(g.f_c().mRc(),new qsh(this,h,m)).lwc(new vch(m,l.value))}a.add(k.iwc());i.Fj(a)}};_.$Hb=function Xrh(a){Irh();{wUl(this.b,ZTl(this.c.h_c().pTc(a.a.f)));this.x_((Ghk(),Fhk))}};_.THb=function Lrh(a){(new ddh(this.c,new tsh(this,a))).VEb()};_._Hb=function Yrh(a,b){b.qEb(this.a,a,this.c,new wsh(this))};var fYb=$fd('org.jboss.hal.client.configuration.subsystem.messaging','ServerSettingsColumn',3445,wsc);function Zrh(){Zrh=sGc}\nfunction $rh(){Zrh()}\nqGc(3446,1,{1:1},$rh);_.o0=function _rh(a){return new ook(m5(a,121))};var SXb=$fd('org.jboss.hal.client.configuration.subsystem.messaging','ServerSettingsColumn/0methodref$ctor$Type',3446,Gib);function ash(){ash=sGc}\nfunction bsh(){ash()}\nqGc(3447,1,{1:1},bsh);_.m0=function csh(a){return m5(a,121).ewc()};var TXb=$fd('org.jboss.hal.client.configuration.subsystem.messaging','ServerSettingsColumn/1methodref$getPreviewContent$Type',3447,Gib);function dsh(){dsh=sGc}\nfunction esh(){dsh()}\nqGc(3452,1,{1:1},esh);_.Sc=function fsh(a){return m5(a,139).hvc()};var UXb=$fd('org.jboss.hal.client.configuration.subsystem.messaging','ServerSettingsColumn/2methodref$getItemId$Type',3452,Gib);function gsh(){gsh=sGc}\nfunction hsh(a){gsh();this.a=a}\nqGc(3450,1,{1:1},hsh);_.A8=function ish(a,b){Mrh(this.a,a,b)};var VXb=$fd('org.jboss.hal.client.configuration.subsystem.messaging','ServerSettingsColumn/lambda$0$Type',3450,Gib);function jsh(){jsh=sGc}\nfunction ksh(a,b,d,e,g,h){jsh();this.a=a;this.f=b;this.b=d;this.c=e;this.d=g;this.e=h}\nqGc(3457,1,{1:1},ksh);_.n0=function lsh(a,b){this.a.UHb(this.f,this.b,this.c,this.d,this.e,a,b)};var WXb=$fd('org.jboss.hal.client.configuration.subsystem.messaging','ServerSettingsColumn/lambda$1$Type',3457,Gib);function msh(){msh=sGc}\nfunction nsh(a,b){msh();this.a=a;this.b=b}\nqGc(3454,1,{1:1},nsh);_.uW=function osh(a){this.a.VHb(this.b,a)};var XXb=$fd('org.jboss.hal.client.configuration.subsystem.messaging','ServerSettingsColumn/lambda$10$Type',3454,Gib);function psh(){psh=sGc}\nfunction qsh(a,b,d){psh();this.a=a;this.c=b;this.b=d}\nqGc(3455,1,{1:1},qsh);_.uW=function rsh(a){this.a.WHb(this.c,this.b,a)};var YXb=$fd('org.jboss.hal.client.configuration.subsystem.messaging','ServerSettingsColumn/lambda$11$Type',3455,Gib);function ssh(){ssh=sGc}\nfunction tsh(a,b){ssh();this.a=a;this.b=b}\nqGc(3459,1,{1:1},tsh);_.$Y=function ush(a,b){this.a.XHb(this.b,a,b)};var ZXb=$fd('org.jboss.hal.client.configuration.subsystem.messaging','ServerSettingsColumn/lambda$2$Type',3459,Gib);function vsh(){vsh=sGc}\nfunction wsh(a){vsh();this.a=a}\nqGc(3460,1,{1:1,12:1},wsh);_.Mj=function xsh(){this.a.YHb()};var $Xb=$fd('org.jboss.hal.client.configuration.subsystem.messaging','ServerSettingsColumn/lambda$3$Type',3460,Gib);function ysh(){ysh=sGc}\nfunction zsh(a){ysh();this.a=a}\nqGc(3448,1,{1:1,28:1},zsh);_._K=function Ash(a){return tId(this,a)};_.aL=function Bsh(){return xId(this)};_.bL=function Csh(a){return yId(this,a)};_.cL=function Dsh(a){return Srh(this.a,a)};var _Xb=$fd('org.jboss.hal.client.configuration.subsystem.messaging','ServerSettingsColumn/lambda$4$Type',3448,Gib);function Esh(){Esh=sGc}\nfunction Fsh(a){Esh();this.a=a}\nqGc(3449,1,{1:1,21:1},Fsh);_.pK=function Gsh(a){Trh(this.a,a)};var aYb=$fd('org.jboss.hal.client.configuration.subsystem.messaging','ServerSettingsColumn/lambda$5$Type',3449,Gib);function Hsh(){Hsh=sGc}\nfunction Ish(){Hsh()}\nqGc(3451,1,{1:1,28:1},Ish);_._K=function Jsh(a){return tId(this,a)};_.aL=function Ksh(){return xId(this)};_.bL=function Lsh(a){return yId(this,a)};_.cL=function Msh(a){return Urh(a)};var bYb=$fd('org.jboss.hal.client.configuration.subsystem.messaging','ServerSettingsColumn/lambda$6$Type',3451,Gib);function Nsh(){Nsh=sGc}\nfunction Osh(a){Nsh();this.a=a}\nqGc(3453,1,{1:1,44:1},Osh);_.Nb=function Psh(){return Vrh(this.a)};var cYb=$fd('org.jboss.hal.client.configuration.subsystem.messaging','ServerSettingsColumn/lambda$7$Type',3453,Gib);function Qsh(){Qsh=sGc}\nfunction Rsh(a,b,d,e,g,h,i,j){Qsh();this.a=a;this.d=b;this.c=d;this.e=e;this.i=g;this.f=h;this.g=i;this.b=j}\nqGc(3456,1,{1:1},Rsh);_.A5=function Ssh(a){this.a.ZHb(this.d,this.c,this.e,this.i,this.f,this.g,this.b,a)};var dYb=$fd('org.jboss.hal.client.configuration.subsystem.messaging','ServerSettingsColumn/lambda$8$Type',3456,Gib);function Tsh(){Tsh=sGc}\nfunction Ush(a,b){Tsh();this.a=a;this.b=b}\nqGc(3458,1,{1:1,12:1},Ush);_.Mj=function Vsh(){this.a.$Hb(this.b)};var eYb=$fd('org.jboss.hal.client.configuration.subsystem.messaging','ServerSettingsColumn/lambda$9$Type',3458,Gib);qGc(1738,1,{1:1});_.YIb=function Muh(){var a;a=this.NJb(this.a.zA().qwc(),this.a.zA().swc(),this.a.DA().jBc(),this.a.vz().xw(),this.a.JA().wIc(),this.a.vA().trc(),this.a.LA().nKc(),this.a.RA().u_c());this.vJb(a);return a};_.vJb=function kvh(a){};_.NJb=function Cvh(a,b,d,e,g,h,i,j){return new Krh(a,b,d,e,g,h,i,j)};qGc(1760,1,{45:1,1:1});_.ek=function bwh(){this.b.Fj(this.a.a.YIb())};qGc(241,1,{1:1,241:1});_.pvc=function llk(){return this.d};_.Ml=function mlk(){return this.f};dWl(zJ)(48);\n//# sourceURL=hal-48.js\n")
