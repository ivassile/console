$wnd.hal.runAsyncCallback48("function wdh(){wdh=LGc;zCe();vdh=(new lv).Rg((Sbh(),Hbh),(new Snk(new $Ue,Gtd(Y3(K3(ejb,1),{4:1,1:1,5:1,6:1},2,6,['scale-down','scale-down-cluster-name','scale-down-connectors','scale-down-discovery-group','scale-down-group-name'])))).gwc()).Rg((Sbh(),Ibh),(new Snk(new $Ue,Gtd(Y3(K3(ejb,1),{4:1,1:1,5:1,6:1},2,6,['backup-port-offset','backup-request-retries','backup-request-retry-interval','max-backups'])))).gwc()).Rg((Sbh(),Lbh),(new Snk(new $Ue,Gtd(Y3(K3(ejb,1),{4:1,1:1,5:1,6:1},2,6,['cluster-name','group-name'])))).gwc()).Rg((Sbh(),Mbh),(new Snk(new $Ue,Gtd(Y3(K3(ejb,1),{4:1,1:1,5:1,6:1},2,6,['cluster-name','group-name','scale-down-cluster-name','scale-down-connectors','scale-down-discovery-group','scale-down-group-name'])))).gwc()).Rg((Sbh(),Nbh),(new Snk(new $Ue,Gtd(Y3(K3(ejb,1),{4:1,1:1,5:1,6:1},2,6,['backup-port-offset','backup-request-retries','backup-request-retry-interval','max-backups'])))).gwc()).Rg((Sbh(),Qbh),(new Snk(new $Ue,Xud('failover-on-server-shutdown'))).gwc()).Rg((Sbh(),Rbh),(new Snk(new $Ue,Gtd(Y3(K3(ejb,1),{4:1,1:1,5:1,6:1},2,6,['scale-down-cluster-name','scale-down-group-name','scale-down-connectors','scale-down-discovery-group'])))).gwc()).Qg()}\nfunction ydh(a,b){wdh();var d;BCe.call(this,a.f);this.WEb();if(vdh.containsKey(a)){d=x5(vdh.get(a),105);this.I$().cN(d);d.kwc(b)}}\nJGc(4938,34,{1:1,8:1,34:1},ydh);_.WEb=function xdh(){};var vdh;var NVb=bhd('org.jboss.hal.client.configuration.subsystem.messaging','HaPolicyPreview',4938,Ltc);function Lsh(){Lsh=LGc;$De()}\nfunction Nsh(a,b,d,e,g,h,i,j){Lsh();aEe.call(this,(new gik(a,'messaging-server-settings',j.t_c().fSc())).huc(new bth).luc(new eth).juc(new kth(j)));this.eIb();this.b=e;this.a=g;this.c=j;this.W_(new nth(this,i,h,b,d,j))}\nfunction Psh(a,b,d){Lsh();var e;{if(kld(b.Ll(),(DGl(),iEl))){e=b.qwc().ld().pM(new Cth(a)).qM();e.nK(new Ith(b))}else{x5(b.qwc().getAtIndex(0),241).Dvc().IW(b)}}}\nfunction Vsh(a,b){Lsh();return kld(a.t_c().fTc(),b.Ml())}\nfunction Wsh(a,b){Lsh();b.Dvc().IW(a)}\nfunction Xsh(a){Lsh();return kld('messaging-server',a.tvc())}\nfunction Ysh(a){Lsh();return a}\nJGc(3445,37,{1:1,13:1,37:1},Nsh);_.eIb=function Msh(){};_.gIb=function Qsh(a,b,d,e,g,h,i){Lsh();var j,k,l,m,n;{k=new $sd;l=SPd(h.xuc().kd(),false).pM(new Lth).qM().oK(new hth);if(l.Ob()){m=U9j(H5(l.Nb()),'messaging-server'+'-');n=new kkl(a,new Rth(m));j=(f6g(),U5g).resolve(n);b.bqc(j,'ha-policy',new Uth(this,k,d,e,m,g,n,i))}else{i.Fj(k)}}};_.hIb=function Rsh(a,b){Lsh();this.fIb(a)};_.iIb=function Ssh(a,b,d){Lsh();this.nIb(a,b)};_.jIb=function Tsh(a,b,d){Lsh();d.a.BEb(this.a,a,new Xth(this,d))};_.kIb=function Ush(){Lsh();this.L_((Jik(),Iik))};_.lIb=function Zsh(a,b,d,e,g,h,i,j){Lsh();var k,l,m;{a.add((new Yok('Destinations')).xwc((DGl(),hEl)).vwc(b.Wvc(d.tBc('messaging-server-destination').eF('server',e).bF())).zwc(new CCe('Destinations',g.x_c().bZc())).wwc());a.add((new Yok('Connections')).xwc((DGl(),gEl)).vwc(b.Wvc(d.tBc('messaging-server-connection').eF('server',e).bF())).zwc(new CCe('Connections',g.x_c().aZc())).wwc());a.add((new Yok('Clustering')).xwc((DGl(),fEl)).vwc(b.Wvc(d.tBc('messaging-server-clustering').eF('server',e).bF())).zwc(new CCe('Clustering',g.x_c()._Yc())).wwc());k=(new Yok('HA Policy')).xwc((DGl(),iEl));if(j.isEmpty()){k.uwc(g.t_c().BMc(),new qth(this,h)).vwc(b.Wvc(d.tBc('messaging-server-ha-policy').eF('server',e).bF())).zwc(new CCe('HA Policy',g.x_c().cZc()))}else{l=x5(j.getAtIndex(0),46);m=Ybh(l.name);k.vwc(b.Wvc(d.tBc('messaging-server-ha-policy').eF('server',e).bF())).uwc(g.t_c().ARc(),new tth(this,h,m)).zwc(new ydh(m,l.value))}a.add(k.wwc());i.Fj(a)}};_.mIb=function $sh(a){Lsh();{zVl(this.b,aVl(this.c.v_c().DTc(a.a.f)));this.L_((Jik(),Iik))}};_.fIb=function Osh(a){(new geh(this.c,new wth(this,a))).hFb()};_.nIb=function _sh(a,b){b.EEb(this.a,a,this.c,new zth(this))};var yYb=bhd('org.jboss.hal.client.configuration.subsystem.messaging','ServerSettingsColumn',3445,Psc);function ath(){ath=LGc}\nfunction bth(){ath()}\nJGc(3446,1,{1:1},bth);_.C0=function cth(a){return new rpk(x5(a,121))};var jYb=bhd('org.jboss.hal.client.configuration.subsystem.messaging','ServerSettingsColumn/0methodref$ctor$Type',3446,Zib);function dth(){dth=LGc}\nfunction eth(){dth()}\nJGc(3447,1,{1:1},eth);_.A0=function fth(a){return x5(a,121).swc()};var kYb=bhd('org.jboss.hal.client.configuration.subsystem.messaging','ServerSettingsColumn/1methodref$getPreviewContent$Type',3447,Zib);function gth(){gth=LGc}\nfunction hth(){gth()}\nJGc(3452,1,{1:1},hth);_.Sc=function ith(a){return x5(a,139).vvc()};var lYb=bhd('org.jboss.hal.client.configuration.subsystem.messaging','ServerSettingsColumn/2methodref$getItemId$Type',3452,Zib);function jth(){jth=LGc}\nfunction kth(a){jth();this.a=a}\nJGc(3450,1,{1:1},kth);_.O8=function lth(a,b){Psh(this.a,a,b)};var mYb=bhd('org.jboss.hal.client.configuration.subsystem.messaging','ServerSettingsColumn/lambda$0$Type',3450,Zib);function mth(){mth=LGc}\nfunction nth(a,b,d,e,g,h){mth();this.a=a;this.f=b;this.b=d;this.c=e;this.d=g;this.e=h}\nJGc(3457,1,{1:1},nth);_.B0=function oth(a,b){this.a.gIb(this.f,this.b,this.c,this.d,this.e,a,b)};var nYb=bhd('org.jboss.hal.client.configuration.subsystem.messaging','ServerSettingsColumn/lambda$1$Type',3457,Zib);function pth(){pth=LGc}\nfunction qth(a,b){pth();this.a=a;this.b=b}\nJGc(3454,1,{1:1},qth);_.IW=function rth(a){this.a.hIb(this.b,a)};var oYb=bhd('org.jboss.hal.client.configuration.subsystem.messaging','ServerSettingsColumn/lambda$10$Type',3454,Zib);function sth(){sth=LGc}\nfunction tth(a,b,d){sth();this.a=a;this.c=b;this.b=d}\nJGc(3455,1,{1:1},tth);_.IW=function uth(a){this.a.iIb(this.c,this.b,a)};var pYb=bhd('org.jboss.hal.client.configuration.subsystem.messaging','ServerSettingsColumn/lambda$11$Type',3455,Zib);function vth(){vth=LGc}\nfunction wth(a,b){vth();this.a=a;this.b=b}\nJGc(3459,1,{1:1},wth);_.mZ=function xth(a,b){this.a.jIb(this.b,a,b)};var qYb=bhd('org.jboss.hal.client.configuration.subsystem.messaging','ServerSettingsColumn/lambda$2$Type',3459,Zib);function yth(){yth=LGc}\nfunction zth(a){yth();this.a=a}\nJGc(3460,1,{1:1,12:1},zth);_.Mj=function Ath(){this.a.kIb()};var rYb=bhd('org.jboss.hal.client.configuration.subsystem.messaging','ServerSettingsColumn/lambda$3$Type',3460,Zib);function Bth(){Bth=LGc}\nfunction Cth(a){Bth();this.a=a}\nJGc(3448,1,{1:1,28:1},Cth);_.nL=function Dth(a){return wJd(this,a)};_.oL=function Eth(){return AJd(this)};_.pL=function Fth(a){return BJd(this,a)};_.qL=function Gth(a){return Vsh(this.a,a)};var sYb=bhd('org.jboss.hal.client.configuration.subsystem.messaging','ServerSettingsColumn/lambda$4$Type',3448,Zib);function Hth(){Hth=LGc}\nfunction Ith(a){Hth();this.a=a}\nJGc(3449,1,{1:1,21:1},Ith);_.DK=function Jth(a){Wsh(this.a,a)};var tYb=bhd('org.jboss.hal.client.configuration.subsystem.messaging','ServerSettingsColumn/lambda$5$Type',3449,Zib);function Kth(){Kth=LGc}\nfunction Lth(){Kth()}\nJGc(3451,1,{1:1,28:1},Lth);_.nL=function Mth(a){return wJd(this,a)};_.oL=function Nth(){return AJd(this)};_.pL=function Oth(a){return BJd(this,a)};_.qL=function Pth(a){return Xsh(a)};var uYb=bhd('org.jboss.hal.client.configuration.subsystem.messaging','ServerSettingsColumn/lambda$6$Type',3451,Zib);function Qth(){Qth=LGc}\nfunction Rth(a){Qth();this.a=a}\nJGc(3453,1,{1:1,44:1},Rth);_.Nb=function Sth(){return Ysh(this.a)};var vYb=bhd('org.jboss.hal.client.configuration.subsystem.messaging','ServerSettingsColumn/lambda$7$Type',3453,Zib);function Tth(){Tth=LGc}\nfunction Uth(a,b,d,e,g,h,i,j){Tth();this.a=a;this.d=b;this.c=d;this.e=e;this.i=g;this.f=h;this.g=i;this.b=j}\nJGc(3456,1,{1:1},Uth);_.O5=function Vth(a){this.a.lIb(this.d,this.c,this.e,this.i,this.f,this.g,this.b,a)};var wYb=bhd('org.jboss.hal.client.configuration.subsystem.messaging','ServerSettingsColumn/lambda$8$Type',3456,Zib);function Wth(){Wth=LGc}\nfunction Xth(a,b){Wth();this.a=a;this.b=b}\nJGc(3458,1,{1:1,12:1},Xth);_.Mj=function Yth(){this.a.mIb(this.b)};var xYb=bhd('org.jboss.hal.client.configuration.subsystem.messaging','ServerSettingsColumn/lambda$9$Type',3458,Zib);JGc(1738,1,{1:1});_.kJb=function Pvh(){var a;a=this._Jb(this.a.NA().Ewc(),this.a.NA().Gwc(),this.a.RA().xBc(),this.a.Jz().Lw(),this.a.XA().KIc(),this.a.JA().Hrc(),this.a.ZA().BKc(),this.a.dB().I_c());this.JJb(a);return a};_.JJb=function nwh(a){};_._Jb=function Fwh(a,b,d,e,g,h,i,j){return new Nsh(a,b,d,e,g,h,i,j)};JGc(1760,1,{45:1,1:1});_.ek=function exh(){this.b.Fj(this.a.a.kJb())};JGc(241,1,{1:1,241:1});_.Dvc=function omk(){return this.d};_.Ml=function pmk(){return this.f};gXl(zJ)(48);\n//# sourceURL=hal-48.js\n")