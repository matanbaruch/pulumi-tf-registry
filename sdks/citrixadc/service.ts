// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Service extends pulumi.CustomResource {
    /**
     * Get an existing Service resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ServiceState, opts?: pulumi.CustomResourceOptions): Service {
        return new Service(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/service:Service';

    /**
     * Returns true if the given object is an instance of Service.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Service {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Service.__pulumiType;
    }

    public readonly accessdown!: pulumi.Output<string>;
    public readonly all!: pulumi.Output<boolean>;
    public readonly appflowlog!: pulumi.Output<string>;
    public readonly cacheable!: pulumi.Output<string>;
    public readonly cachetype!: pulumi.Output<string>;
    public readonly cip!: pulumi.Output<string>;
    public readonly cipheader!: pulumi.Output<string>;
    public readonly cka!: pulumi.Output<string>;
    public readonly cleartextport!: pulumi.Output<number>;
    public readonly clttimeout!: pulumi.Output<number>;
    public readonly cmp!: pulumi.Output<string>;
    public readonly comment!: pulumi.Output<string>;
    public readonly commonname!: pulumi.Output<string>;
    public readonly contentinspectionprofilename!: pulumi.Output<string>;
    public readonly customserverid!: pulumi.Output<string>;
    public readonly delay!: pulumi.Output<number>;
    public readonly disabledPollDelay!: pulumi.Output<string | undefined>;
    public readonly disabledPollInterval!: pulumi.Output<string | undefined>;
    public readonly disabledTimeout!: pulumi.Output<string | undefined>;
    public readonly dnsprofilename!: pulumi.Output<string>;
    public readonly downstateflush!: pulumi.Output<string>;
    public readonly graceful!: pulumi.Output<string>;
    public readonly hashid!: pulumi.Output<number>;
    public readonly healthmonitor!: pulumi.Output<string>;
    public readonly httpprofilename!: pulumi.Output<string>;
    public readonly internal!: pulumi.Output<boolean>;
    public readonly ip!: pulumi.Output<string>;
    public readonly ipaddress!: pulumi.Output<string>;
    public readonly lbmonitor!: pulumi.Output<string>;
    public readonly lbvserver!: pulumi.Output<string | undefined>;
    public readonly maxbandwidth!: pulumi.Output<number>;
    public readonly maxclient!: pulumi.Output<number>;
    public readonly maxreq!: pulumi.Output<number>;
    public readonly monconnectionclose!: pulumi.Output<string>;
    public readonly monitornamesvc!: pulumi.Output<string>;
    public readonly monthreshold!: pulumi.Output<number>;
    public readonly name!: pulumi.Output<string>;
    public readonly netprofile!: pulumi.Output<string>;
    public readonly pathmonitor!: pulumi.Output<string>;
    public readonly pathmonitorindv!: pulumi.Output<string>;
    public readonly port!: pulumi.Output<number>;
    public readonly processlocal!: pulumi.Output<string>;
    public readonly riseapbrstatsmsgcode!: pulumi.Output<number>;
    public readonly rtspsessionidremap!: pulumi.Output<string>;
    public readonly sc!: pulumi.Output<string>;
    public readonly serverid!: pulumi.Output<number>;
    public readonly servername!: pulumi.Output<string>;
    public readonly servicetype!: pulumi.Output<string>;
    public readonly snienable!: pulumi.Output<string>;
    public readonly sp!: pulumi.Output<string>;
    public readonly state!: pulumi.Output<string>;
    public readonly svrtimeout!: pulumi.Output<number>;
    public readonly tcpb!: pulumi.Output<string>;
    public readonly tcpprofilename!: pulumi.Output<string>;
    public readonly td!: pulumi.Output<number>;
    public readonly useproxyport!: pulumi.Output<string>;
    public readonly usip!: pulumi.Output<string>;
    public readonly waitUntilDisabled!: pulumi.Output<boolean>;
    public readonly weight!: pulumi.Output<number>;

    /**
     * Create a Service resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ServiceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ServiceArgs | ServiceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ServiceState | undefined;
            resourceInputs["accessdown"] = state ? state.accessdown : undefined;
            resourceInputs["all"] = state ? state.all : undefined;
            resourceInputs["appflowlog"] = state ? state.appflowlog : undefined;
            resourceInputs["cacheable"] = state ? state.cacheable : undefined;
            resourceInputs["cachetype"] = state ? state.cachetype : undefined;
            resourceInputs["cip"] = state ? state.cip : undefined;
            resourceInputs["cipheader"] = state ? state.cipheader : undefined;
            resourceInputs["cka"] = state ? state.cka : undefined;
            resourceInputs["cleartextport"] = state ? state.cleartextport : undefined;
            resourceInputs["clttimeout"] = state ? state.clttimeout : undefined;
            resourceInputs["cmp"] = state ? state.cmp : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["commonname"] = state ? state.commonname : undefined;
            resourceInputs["contentinspectionprofilename"] = state ? state.contentinspectionprofilename : undefined;
            resourceInputs["customserverid"] = state ? state.customserverid : undefined;
            resourceInputs["delay"] = state ? state.delay : undefined;
            resourceInputs["disabledPollDelay"] = state ? state.disabledPollDelay : undefined;
            resourceInputs["disabledPollInterval"] = state ? state.disabledPollInterval : undefined;
            resourceInputs["disabledTimeout"] = state ? state.disabledTimeout : undefined;
            resourceInputs["dnsprofilename"] = state ? state.dnsprofilename : undefined;
            resourceInputs["downstateflush"] = state ? state.downstateflush : undefined;
            resourceInputs["graceful"] = state ? state.graceful : undefined;
            resourceInputs["hashid"] = state ? state.hashid : undefined;
            resourceInputs["healthmonitor"] = state ? state.healthmonitor : undefined;
            resourceInputs["httpprofilename"] = state ? state.httpprofilename : undefined;
            resourceInputs["internal"] = state ? state.internal : undefined;
            resourceInputs["ip"] = state ? state.ip : undefined;
            resourceInputs["ipaddress"] = state ? state.ipaddress : undefined;
            resourceInputs["lbmonitor"] = state ? state.lbmonitor : undefined;
            resourceInputs["lbvserver"] = state ? state.lbvserver : undefined;
            resourceInputs["maxbandwidth"] = state ? state.maxbandwidth : undefined;
            resourceInputs["maxclient"] = state ? state.maxclient : undefined;
            resourceInputs["maxreq"] = state ? state.maxreq : undefined;
            resourceInputs["monconnectionclose"] = state ? state.monconnectionclose : undefined;
            resourceInputs["monitornamesvc"] = state ? state.monitornamesvc : undefined;
            resourceInputs["monthreshold"] = state ? state.monthreshold : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["netprofile"] = state ? state.netprofile : undefined;
            resourceInputs["pathmonitor"] = state ? state.pathmonitor : undefined;
            resourceInputs["pathmonitorindv"] = state ? state.pathmonitorindv : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["processlocal"] = state ? state.processlocal : undefined;
            resourceInputs["riseapbrstatsmsgcode"] = state ? state.riseapbrstatsmsgcode : undefined;
            resourceInputs["rtspsessionidremap"] = state ? state.rtspsessionidremap : undefined;
            resourceInputs["sc"] = state ? state.sc : undefined;
            resourceInputs["serverid"] = state ? state.serverid : undefined;
            resourceInputs["servername"] = state ? state.servername : undefined;
            resourceInputs["servicetype"] = state ? state.servicetype : undefined;
            resourceInputs["snienable"] = state ? state.snienable : undefined;
            resourceInputs["sp"] = state ? state.sp : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["svrtimeout"] = state ? state.svrtimeout : undefined;
            resourceInputs["tcpb"] = state ? state.tcpb : undefined;
            resourceInputs["tcpprofilename"] = state ? state.tcpprofilename : undefined;
            resourceInputs["td"] = state ? state.td : undefined;
            resourceInputs["useproxyport"] = state ? state.useproxyport : undefined;
            resourceInputs["usip"] = state ? state.usip : undefined;
            resourceInputs["waitUntilDisabled"] = state ? state.waitUntilDisabled : undefined;
            resourceInputs["weight"] = state ? state.weight : undefined;
        } else {
            const args = argsOrState as ServiceArgs | undefined;
            resourceInputs["accessdown"] = args ? args.accessdown : undefined;
            resourceInputs["all"] = args ? args.all : undefined;
            resourceInputs["appflowlog"] = args ? args.appflowlog : undefined;
            resourceInputs["cacheable"] = args ? args.cacheable : undefined;
            resourceInputs["cachetype"] = args ? args.cachetype : undefined;
            resourceInputs["cip"] = args ? args.cip : undefined;
            resourceInputs["cipheader"] = args ? args.cipheader : undefined;
            resourceInputs["cka"] = args ? args.cka : undefined;
            resourceInputs["cleartextport"] = args ? args.cleartextport : undefined;
            resourceInputs["clttimeout"] = args ? args.clttimeout : undefined;
            resourceInputs["cmp"] = args ? args.cmp : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["commonname"] = args ? args.commonname : undefined;
            resourceInputs["contentinspectionprofilename"] = args ? args.contentinspectionprofilename : undefined;
            resourceInputs["customserverid"] = args ? args.customserverid : undefined;
            resourceInputs["delay"] = args ? args.delay : undefined;
            resourceInputs["disabledPollDelay"] = args ? args.disabledPollDelay : undefined;
            resourceInputs["disabledPollInterval"] = args ? args.disabledPollInterval : undefined;
            resourceInputs["disabledTimeout"] = args ? args.disabledTimeout : undefined;
            resourceInputs["dnsprofilename"] = args ? args.dnsprofilename : undefined;
            resourceInputs["downstateflush"] = args ? args.downstateflush : undefined;
            resourceInputs["graceful"] = args ? args.graceful : undefined;
            resourceInputs["hashid"] = args ? args.hashid : undefined;
            resourceInputs["healthmonitor"] = args ? args.healthmonitor : undefined;
            resourceInputs["httpprofilename"] = args ? args.httpprofilename : undefined;
            resourceInputs["internal"] = args ? args.internal : undefined;
            resourceInputs["ip"] = args ? args.ip : undefined;
            resourceInputs["ipaddress"] = args ? args.ipaddress : undefined;
            resourceInputs["lbmonitor"] = args ? args.lbmonitor : undefined;
            resourceInputs["lbvserver"] = args ? args.lbvserver : undefined;
            resourceInputs["maxbandwidth"] = args ? args.maxbandwidth : undefined;
            resourceInputs["maxclient"] = args ? args.maxclient : undefined;
            resourceInputs["maxreq"] = args ? args.maxreq : undefined;
            resourceInputs["monconnectionclose"] = args ? args.monconnectionclose : undefined;
            resourceInputs["monitornamesvc"] = args ? args.monitornamesvc : undefined;
            resourceInputs["monthreshold"] = args ? args.monthreshold : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["netprofile"] = args ? args.netprofile : undefined;
            resourceInputs["pathmonitor"] = args ? args.pathmonitor : undefined;
            resourceInputs["pathmonitorindv"] = args ? args.pathmonitorindv : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["processlocal"] = args ? args.processlocal : undefined;
            resourceInputs["riseapbrstatsmsgcode"] = args ? args.riseapbrstatsmsgcode : undefined;
            resourceInputs["rtspsessionidremap"] = args ? args.rtspsessionidremap : undefined;
            resourceInputs["sc"] = args ? args.sc : undefined;
            resourceInputs["serverid"] = args ? args.serverid : undefined;
            resourceInputs["servername"] = args ? args.servername : undefined;
            resourceInputs["servicetype"] = args ? args.servicetype : undefined;
            resourceInputs["snienable"] = args ? args.snienable : undefined;
            resourceInputs["sp"] = args ? args.sp : undefined;
            resourceInputs["state"] = args ? args.state : undefined;
            resourceInputs["svrtimeout"] = args ? args.svrtimeout : undefined;
            resourceInputs["tcpb"] = args ? args.tcpb : undefined;
            resourceInputs["tcpprofilename"] = args ? args.tcpprofilename : undefined;
            resourceInputs["td"] = args ? args.td : undefined;
            resourceInputs["useproxyport"] = args ? args.useproxyport : undefined;
            resourceInputs["usip"] = args ? args.usip : undefined;
            resourceInputs["waitUntilDisabled"] = args ? args.waitUntilDisabled : undefined;
            resourceInputs["weight"] = args ? args.weight : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Service.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Service resources.
 */
export interface ServiceState {
    accessdown?: pulumi.Input<string>;
    all?: pulumi.Input<boolean>;
    appflowlog?: pulumi.Input<string>;
    cacheable?: pulumi.Input<string>;
    cachetype?: pulumi.Input<string>;
    cip?: pulumi.Input<string>;
    cipheader?: pulumi.Input<string>;
    cka?: pulumi.Input<string>;
    cleartextport?: pulumi.Input<number>;
    clttimeout?: pulumi.Input<number>;
    cmp?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    commonname?: pulumi.Input<string>;
    contentinspectionprofilename?: pulumi.Input<string>;
    customserverid?: pulumi.Input<string>;
    delay?: pulumi.Input<number>;
    disabledPollDelay?: pulumi.Input<string>;
    disabledPollInterval?: pulumi.Input<string>;
    disabledTimeout?: pulumi.Input<string>;
    dnsprofilename?: pulumi.Input<string>;
    downstateflush?: pulumi.Input<string>;
    graceful?: pulumi.Input<string>;
    hashid?: pulumi.Input<number>;
    healthmonitor?: pulumi.Input<string>;
    httpprofilename?: pulumi.Input<string>;
    internal?: pulumi.Input<boolean>;
    ip?: pulumi.Input<string>;
    ipaddress?: pulumi.Input<string>;
    lbmonitor?: pulumi.Input<string>;
    lbvserver?: pulumi.Input<string>;
    maxbandwidth?: pulumi.Input<number>;
    maxclient?: pulumi.Input<number>;
    maxreq?: pulumi.Input<number>;
    monconnectionclose?: pulumi.Input<string>;
    monitornamesvc?: pulumi.Input<string>;
    monthreshold?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    netprofile?: pulumi.Input<string>;
    pathmonitor?: pulumi.Input<string>;
    pathmonitorindv?: pulumi.Input<string>;
    port?: pulumi.Input<number>;
    processlocal?: pulumi.Input<string>;
    riseapbrstatsmsgcode?: pulumi.Input<number>;
    rtspsessionidremap?: pulumi.Input<string>;
    sc?: pulumi.Input<string>;
    serverid?: pulumi.Input<number>;
    servername?: pulumi.Input<string>;
    servicetype?: pulumi.Input<string>;
    snienable?: pulumi.Input<string>;
    sp?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    svrtimeout?: pulumi.Input<number>;
    tcpb?: pulumi.Input<string>;
    tcpprofilename?: pulumi.Input<string>;
    td?: pulumi.Input<number>;
    useproxyport?: pulumi.Input<string>;
    usip?: pulumi.Input<string>;
    waitUntilDisabled?: pulumi.Input<boolean>;
    weight?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a Service resource.
 */
export interface ServiceArgs {
    accessdown?: pulumi.Input<string>;
    all?: pulumi.Input<boolean>;
    appflowlog?: pulumi.Input<string>;
    cacheable?: pulumi.Input<string>;
    cachetype?: pulumi.Input<string>;
    cip?: pulumi.Input<string>;
    cipheader?: pulumi.Input<string>;
    cka?: pulumi.Input<string>;
    cleartextport?: pulumi.Input<number>;
    clttimeout?: pulumi.Input<number>;
    cmp?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    commonname?: pulumi.Input<string>;
    contentinspectionprofilename?: pulumi.Input<string>;
    customserverid?: pulumi.Input<string>;
    delay?: pulumi.Input<number>;
    disabledPollDelay?: pulumi.Input<string>;
    disabledPollInterval?: pulumi.Input<string>;
    disabledTimeout?: pulumi.Input<string>;
    dnsprofilename?: pulumi.Input<string>;
    downstateflush?: pulumi.Input<string>;
    graceful?: pulumi.Input<string>;
    hashid?: pulumi.Input<number>;
    healthmonitor?: pulumi.Input<string>;
    httpprofilename?: pulumi.Input<string>;
    internal?: pulumi.Input<boolean>;
    ip?: pulumi.Input<string>;
    ipaddress?: pulumi.Input<string>;
    lbmonitor?: pulumi.Input<string>;
    lbvserver?: pulumi.Input<string>;
    maxbandwidth?: pulumi.Input<number>;
    maxclient?: pulumi.Input<number>;
    maxreq?: pulumi.Input<number>;
    monconnectionclose?: pulumi.Input<string>;
    monitornamesvc?: pulumi.Input<string>;
    monthreshold?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    netprofile?: pulumi.Input<string>;
    pathmonitor?: pulumi.Input<string>;
    pathmonitorindv?: pulumi.Input<string>;
    port?: pulumi.Input<number>;
    processlocal?: pulumi.Input<string>;
    riseapbrstatsmsgcode?: pulumi.Input<number>;
    rtspsessionidremap?: pulumi.Input<string>;
    sc?: pulumi.Input<string>;
    serverid?: pulumi.Input<number>;
    servername?: pulumi.Input<string>;
    servicetype?: pulumi.Input<string>;
    snienable?: pulumi.Input<string>;
    sp?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    svrtimeout?: pulumi.Input<number>;
    tcpb?: pulumi.Input<string>;
    tcpprofilename?: pulumi.Input<string>;
    td?: pulumi.Input<number>;
    useproxyport?: pulumi.Input<string>;
    usip?: pulumi.Input<string>;
    waitUntilDisabled?: pulumi.Input<boolean>;
    weight?: pulumi.Input<number>;
}
