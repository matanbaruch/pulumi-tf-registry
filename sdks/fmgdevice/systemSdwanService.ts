// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SystemSdwanService extends pulumi.CustomResource {
    /**
     * Get an existing SystemSdwanService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemSdwanServiceState, opts?: pulumi.CustomResourceOptions): SystemSdwanService {
        return new SystemSdwanService(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmgdevice:index/systemSdwanService:SystemSdwanService';

    /**
     * Returns true if the given object is an instance of SystemSdwanService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemSdwanService {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemSdwanService.__pulumiType;
    }

    public readonly addrMode!: pulumi.Output<string>;
    public readonly agentExclusive!: pulumi.Output<string>;
    public readonly bandwidthWeight!: pulumi.Output<number | undefined>;
    public readonly default!: pulumi.Output<string>;
    public readonly deviceName!: pulumi.Output<string>;
    public readonly deviceVdom!: pulumi.Output<string>;
    public readonly dscpForward!: pulumi.Output<string>;
    public readonly dscpForwardTag!: pulumi.Output<string | undefined>;
    public readonly dscpReverse!: pulumi.Output<string>;
    public readonly dscpReverseTag!: pulumi.Output<string | undefined>;
    public readonly dst6s!: pulumi.Output<string[]>;
    public readonly dstNegate!: pulumi.Output<string>;
    public readonly dsts!: pulumi.Output<string[]>;
    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly endPort!: pulumi.Output<number>;
    public readonly endSrcPort!: pulumi.Output<number>;
    public readonly fosid!: pulumi.Output<number | undefined>;
    public readonly gateway!: pulumi.Output<string>;
    public readonly groups!: pulumi.Output<string[]>;
    public readonly hashMode!: pulumi.Output<string | undefined>;
    public readonly healthChecks!: pulumi.Output<string[]>;
    public readonly holdDownTime!: pulumi.Output<number | undefined>;
    public readonly inputDeviceNegate!: pulumi.Output<string>;
    public readonly inputDevices!: pulumi.Output<string[]>;
    public readonly inputZones!: pulumi.Output<string[]>;
    public readonly internetService!: pulumi.Output<string>;
    public readonly internetServiceAppCtrlCategories!: pulumi.Output<number[]>;
    public readonly internetServiceAppCtrlGroups!: pulumi.Output<string[]>;
    public readonly internetServiceAppCtrls!: pulumi.Output<number[]>;
    public readonly internetServiceCustomGroups!: pulumi.Output<string[]>;
    public readonly internetServiceCustoms!: pulumi.Output<string[]>;
    public readonly internetServiceGroups!: pulumi.Output<string[]>;
    public readonly internetServiceNames!: pulumi.Output<string[]>;
    public readonly jitterWeight!: pulumi.Output<number | undefined>;
    public readonly latencyWeight!: pulumi.Output<number | undefined>;
    public readonly linkCostFactor!: pulumi.Output<string | undefined>;
    public readonly linkCostThreshold!: pulumi.Output<number>;
    public readonly loadBalance!: pulumi.Output<string>;
    public readonly minimumSlaMeetMembers!: pulumi.Output<number | undefined>;
    public readonly mode!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly packetLossWeight!: pulumi.Output<number | undefined>;
    public readonly passiveMeasurement!: pulumi.Output<string>;
    public readonly priorityMembers!: pulumi.Output<string[]>;
    public readonly priorityZones!: pulumi.Output<string[]>;
    public readonly protocol!: pulumi.Output<number | undefined>;
    public readonly qualityLink!: pulumi.Output<number | undefined>;
    public readonly role!: pulumi.Output<string>;
    public readonly routeTag!: pulumi.Output<number | undefined>;
    public readonly shortcut!: pulumi.Output<string>;
    public readonly shortcutPriority!: pulumi.Output<string>;
    public readonly slaCompareMethod!: pulumi.Output<string | undefined>;
    public readonly slaStickiness!: pulumi.Output<string | undefined>;
    public readonly slas!: pulumi.Output<outputs.SystemSdwanServiceSla[] | undefined>;
    public readonly src6s!: pulumi.Output<string[]>;
    public readonly srcNegate!: pulumi.Output<string>;
    public readonly srcs!: pulumi.Output<string[]>;
    public readonly standaloneAction!: pulumi.Output<string>;
    public readonly startPort!: pulumi.Output<number>;
    public readonly startSrcPort!: pulumi.Output<number>;
    public readonly status!: pulumi.Output<string>;
    public readonly tieBreak!: pulumi.Output<string>;
    public readonly tos!: pulumi.Output<string>;
    public readonly tosMask!: pulumi.Output<string>;
    public readonly useShortcutSla!: pulumi.Output<string>;
    public readonly users!: pulumi.Output<string[]>;
    public readonly zoneMode!: pulumi.Output<string>;

    /**
     * Create a SystemSdwanService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemSdwanServiceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemSdwanServiceArgs | SystemSdwanServiceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemSdwanServiceState | undefined;
            resourceInputs["addrMode"] = state ? state.addrMode : undefined;
            resourceInputs["agentExclusive"] = state ? state.agentExclusive : undefined;
            resourceInputs["bandwidthWeight"] = state ? state.bandwidthWeight : undefined;
            resourceInputs["default"] = state ? state.default : undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["deviceVdom"] = state ? state.deviceVdom : undefined;
            resourceInputs["dscpForward"] = state ? state.dscpForward : undefined;
            resourceInputs["dscpForwardTag"] = state ? state.dscpForwardTag : undefined;
            resourceInputs["dscpReverse"] = state ? state.dscpReverse : undefined;
            resourceInputs["dscpReverseTag"] = state ? state.dscpReverseTag : undefined;
            resourceInputs["dst6s"] = state ? state.dst6s : undefined;
            resourceInputs["dstNegate"] = state ? state.dstNegate : undefined;
            resourceInputs["dsts"] = state ? state.dsts : undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["endPort"] = state ? state.endPort : undefined;
            resourceInputs["endSrcPort"] = state ? state.endSrcPort : undefined;
            resourceInputs["fosid"] = state ? state.fosid : undefined;
            resourceInputs["gateway"] = state ? state.gateway : undefined;
            resourceInputs["groups"] = state ? state.groups : undefined;
            resourceInputs["hashMode"] = state ? state.hashMode : undefined;
            resourceInputs["healthChecks"] = state ? state.healthChecks : undefined;
            resourceInputs["holdDownTime"] = state ? state.holdDownTime : undefined;
            resourceInputs["inputDeviceNegate"] = state ? state.inputDeviceNegate : undefined;
            resourceInputs["inputDevices"] = state ? state.inputDevices : undefined;
            resourceInputs["inputZones"] = state ? state.inputZones : undefined;
            resourceInputs["internetService"] = state ? state.internetService : undefined;
            resourceInputs["internetServiceAppCtrlCategories"] = state ? state.internetServiceAppCtrlCategories : undefined;
            resourceInputs["internetServiceAppCtrlGroups"] = state ? state.internetServiceAppCtrlGroups : undefined;
            resourceInputs["internetServiceAppCtrls"] = state ? state.internetServiceAppCtrls : undefined;
            resourceInputs["internetServiceCustomGroups"] = state ? state.internetServiceCustomGroups : undefined;
            resourceInputs["internetServiceCustoms"] = state ? state.internetServiceCustoms : undefined;
            resourceInputs["internetServiceGroups"] = state ? state.internetServiceGroups : undefined;
            resourceInputs["internetServiceNames"] = state ? state.internetServiceNames : undefined;
            resourceInputs["jitterWeight"] = state ? state.jitterWeight : undefined;
            resourceInputs["latencyWeight"] = state ? state.latencyWeight : undefined;
            resourceInputs["linkCostFactor"] = state ? state.linkCostFactor : undefined;
            resourceInputs["linkCostThreshold"] = state ? state.linkCostThreshold : undefined;
            resourceInputs["loadBalance"] = state ? state.loadBalance : undefined;
            resourceInputs["minimumSlaMeetMembers"] = state ? state.minimumSlaMeetMembers : undefined;
            resourceInputs["mode"] = state ? state.mode : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["packetLossWeight"] = state ? state.packetLossWeight : undefined;
            resourceInputs["passiveMeasurement"] = state ? state.passiveMeasurement : undefined;
            resourceInputs["priorityMembers"] = state ? state.priorityMembers : undefined;
            resourceInputs["priorityZones"] = state ? state.priorityZones : undefined;
            resourceInputs["protocol"] = state ? state.protocol : undefined;
            resourceInputs["qualityLink"] = state ? state.qualityLink : undefined;
            resourceInputs["role"] = state ? state.role : undefined;
            resourceInputs["routeTag"] = state ? state.routeTag : undefined;
            resourceInputs["shortcut"] = state ? state.shortcut : undefined;
            resourceInputs["shortcutPriority"] = state ? state.shortcutPriority : undefined;
            resourceInputs["slaCompareMethod"] = state ? state.slaCompareMethod : undefined;
            resourceInputs["slaStickiness"] = state ? state.slaStickiness : undefined;
            resourceInputs["slas"] = state ? state.slas : undefined;
            resourceInputs["src6s"] = state ? state.src6s : undefined;
            resourceInputs["srcNegate"] = state ? state.srcNegate : undefined;
            resourceInputs["srcs"] = state ? state.srcs : undefined;
            resourceInputs["standaloneAction"] = state ? state.standaloneAction : undefined;
            resourceInputs["startPort"] = state ? state.startPort : undefined;
            resourceInputs["startSrcPort"] = state ? state.startSrcPort : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["tieBreak"] = state ? state.tieBreak : undefined;
            resourceInputs["tos"] = state ? state.tos : undefined;
            resourceInputs["tosMask"] = state ? state.tosMask : undefined;
            resourceInputs["useShortcutSla"] = state ? state.useShortcutSla : undefined;
            resourceInputs["users"] = state ? state.users : undefined;
            resourceInputs["zoneMode"] = state ? state.zoneMode : undefined;
        } else {
            const args = argsOrState as SystemSdwanServiceArgs | undefined;
            resourceInputs["addrMode"] = args ? args.addrMode : undefined;
            resourceInputs["agentExclusive"] = args ? args.agentExclusive : undefined;
            resourceInputs["bandwidthWeight"] = args ? args.bandwidthWeight : undefined;
            resourceInputs["default"] = args ? args.default : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["deviceVdom"] = args ? args.deviceVdom : undefined;
            resourceInputs["dscpForward"] = args ? args.dscpForward : undefined;
            resourceInputs["dscpForwardTag"] = args ? args.dscpForwardTag : undefined;
            resourceInputs["dscpReverse"] = args ? args.dscpReverse : undefined;
            resourceInputs["dscpReverseTag"] = args ? args.dscpReverseTag : undefined;
            resourceInputs["dst6s"] = args ? args.dst6s : undefined;
            resourceInputs["dstNegate"] = args ? args.dstNegate : undefined;
            resourceInputs["dsts"] = args ? args.dsts : undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["endPort"] = args ? args.endPort : undefined;
            resourceInputs["endSrcPort"] = args ? args.endSrcPort : undefined;
            resourceInputs["fosid"] = args ? args.fosid : undefined;
            resourceInputs["gateway"] = args ? args.gateway : undefined;
            resourceInputs["groups"] = args ? args.groups : undefined;
            resourceInputs["hashMode"] = args ? args.hashMode : undefined;
            resourceInputs["healthChecks"] = args ? args.healthChecks : undefined;
            resourceInputs["holdDownTime"] = args ? args.holdDownTime : undefined;
            resourceInputs["inputDeviceNegate"] = args ? args.inputDeviceNegate : undefined;
            resourceInputs["inputDevices"] = args ? args.inputDevices : undefined;
            resourceInputs["inputZones"] = args ? args.inputZones : undefined;
            resourceInputs["internetService"] = args ? args.internetService : undefined;
            resourceInputs["internetServiceAppCtrlCategories"] = args ? args.internetServiceAppCtrlCategories : undefined;
            resourceInputs["internetServiceAppCtrlGroups"] = args ? args.internetServiceAppCtrlGroups : undefined;
            resourceInputs["internetServiceAppCtrls"] = args ? args.internetServiceAppCtrls : undefined;
            resourceInputs["internetServiceCustomGroups"] = args ? args.internetServiceCustomGroups : undefined;
            resourceInputs["internetServiceCustoms"] = args ? args.internetServiceCustoms : undefined;
            resourceInputs["internetServiceGroups"] = args ? args.internetServiceGroups : undefined;
            resourceInputs["internetServiceNames"] = args ? args.internetServiceNames : undefined;
            resourceInputs["jitterWeight"] = args ? args.jitterWeight : undefined;
            resourceInputs["latencyWeight"] = args ? args.latencyWeight : undefined;
            resourceInputs["linkCostFactor"] = args ? args.linkCostFactor : undefined;
            resourceInputs["linkCostThreshold"] = args ? args.linkCostThreshold : undefined;
            resourceInputs["loadBalance"] = args ? args.loadBalance : undefined;
            resourceInputs["minimumSlaMeetMembers"] = args ? args.minimumSlaMeetMembers : undefined;
            resourceInputs["mode"] = args ? args.mode : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["packetLossWeight"] = args ? args.packetLossWeight : undefined;
            resourceInputs["passiveMeasurement"] = args ? args.passiveMeasurement : undefined;
            resourceInputs["priorityMembers"] = args ? args.priorityMembers : undefined;
            resourceInputs["priorityZones"] = args ? args.priorityZones : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["qualityLink"] = args ? args.qualityLink : undefined;
            resourceInputs["role"] = args ? args.role : undefined;
            resourceInputs["routeTag"] = args ? args.routeTag : undefined;
            resourceInputs["shortcut"] = args ? args.shortcut : undefined;
            resourceInputs["shortcutPriority"] = args ? args.shortcutPriority : undefined;
            resourceInputs["slaCompareMethod"] = args ? args.slaCompareMethod : undefined;
            resourceInputs["slaStickiness"] = args ? args.slaStickiness : undefined;
            resourceInputs["slas"] = args ? args.slas : undefined;
            resourceInputs["src6s"] = args ? args.src6s : undefined;
            resourceInputs["srcNegate"] = args ? args.srcNegate : undefined;
            resourceInputs["srcs"] = args ? args.srcs : undefined;
            resourceInputs["standaloneAction"] = args ? args.standaloneAction : undefined;
            resourceInputs["startPort"] = args ? args.startPort : undefined;
            resourceInputs["startSrcPort"] = args ? args.startSrcPort : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["tieBreak"] = args ? args.tieBreak : undefined;
            resourceInputs["tos"] = args ? args.tos : undefined;
            resourceInputs["tosMask"] = args ? args.tosMask : undefined;
            resourceInputs["useShortcutSla"] = args ? args.useShortcutSla : undefined;
            resourceInputs["users"] = args ? args.users : undefined;
            resourceInputs["zoneMode"] = args ? args.zoneMode : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemSdwanService.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemSdwanService resources.
 */
export interface SystemSdwanServiceState {
    addrMode?: pulumi.Input<string>;
    agentExclusive?: pulumi.Input<string>;
    bandwidthWeight?: pulumi.Input<number>;
    default?: pulumi.Input<string>;
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    dscpForward?: pulumi.Input<string>;
    dscpForwardTag?: pulumi.Input<string>;
    dscpReverse?: pulumi.Input<string>;
    dscpReverseTag?: pulumi.Input<string>;
    dst6s?: pulumi.Input<pulumi.Input<string>[]>;
    dstNegate?: pulumi.Input<string>;
    dsts?: pulumi.Input<pulumi.Input<string>[]>;
    dynamicSortSubtable?: pulumi.Input<string>;
    endPort?: pulumi.Input<number>;
    endSrcPort?: pulumi.Input<number>;
    fosid?: pulumi.Input<number>;
    gateway?: pulumi.Input<string>;
    groups?: pulumi.Input<pulumi.Input<string>[]>;
    hashMode?: pulumi.Input<string>;
    healthChecks?: pulumi.Input<pulumi.Input<string>[]>;
    holdDownTime?: pulumi.Input<number>;
    inputDeviceNegate?: pulumi.Input<string>;
    inputDevices?: pulumi.Input<pulumi.Input<string>[]>;
    inputZones?: pulumi.Input<pulumi.Input<string>[]>;
    internetService?: pulumi.Input<string>;
    internetServiceAppCtrlCategories?: pulumi.Input<pulumi.Input<number>[]>;
    internetServiceAppCtrlGroups?: pulumi.Input<pulumi.Input<string>[]>;
    internetServiceAppCtrls?: pulumi.Input<pulumi.Input<number>[]>;
    internetServiceCustomGroups?: pulumi.Input<pulumi.Input<string>[]>;
    internetServiceCustoms?: pulumi.Input<pulumi.Input<string>[]>;
    internetServiceGroups?: pulumi.Input<pulumi.Input<string>[]>;
    internetServiceNames?: pulumi.Input<pulumi.Input<string>[]>;
    jitterWeight?: pulumi.Input<number>;
    latencyWeight?: pulumi.Input<number>;
    linkCostFactor?: pulumi.Input<string>;
    linkCostThreshold?: pulumi.Input<number>;
    loadBalance?: pulumi.Input<string>;
    minimumSlaMeetMembers?: pulumi.Input<number>;
    mode?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    packetLossWeight?: pulumi.Input<number>;
    passiveMeasurement?: pulumi.Input<string>;
    priorityMembers?: pulumi.Input<pulumi.Input<string>[]>;
    priorityZones?: pulumi.Input<pulumi.Input<string>[]>;
    protocol?: pulumi.Input<number>;
    qualityLink?: pulumi.Input<number>;
    role?: pulumi.Input<string>;
    routeTag?: pulumi.Input<number>;
    shortcut?: pulumi.Input<string>;
    shortcutPriority?: pulumi.Input<string>;
    slaCompareMethod?: pulumi.Input<string>;
    slaStickiness?: pulumi.Input<string>;
    slas?: pulumi.Input<pulumi.Input<inputs.SystemSdwanServiceSla>[]>;
    src6s?: pulumi.Input<pulumi.Input<string>[]>;
    srcNegate?: pulumi.Input<string>;
    srcs?: pulumi.Input<pulumi.Input<string>[]>;
    standaloneAction?: pulumi.Input<string>;
    startPort?: pulumi.Input<number>;
    startSrcPort?: pulumi.Input<number>;
    status?: pulumi.Input<string>;
    tieBreak?: pulumi.Input<string>;
    tos?: pulumi.Input<string>;
    tosMask?: pulumi.Input<string>;
    useShortcutSla?: pulumi.Input<string>;
    users?: pulumi.Input<pulumi.Input<string>[]>;
    zoneMode?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemSdwanService resource.
 */
export interface SystemSdwanServiceArgs {
    addrMode?: pulumi.Input<string>;
    agentExclusive?: pulumi.Input<string>;
    bandwidthWeight?: pulumi.Input<number>;
    default?: pulumi.Input<string>;
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    dscpForward?: pulumi.Input<string>;
    dscpForwardTag?: pulumi.Input<string>;
    dscpReverse?: pulumi.Input<string>;
    dscpReverseTag?: pulumi.Input<string>;
    dst6s?: pulumi.Input<pulumi.Input<string>[]>;
    dstNegate?: pulumi.Input<string>;
    dsts?: pulumi.Input<pulumi.Input<string>[]>;
    dynamicSortSubtable?: pulumi.Input<string>;
    endPort?: pulumi.Input<number>;
    endSrcPort?: pulumi.Input<number>;
    fosid?: pulumi.Input<number>;
    gateway?: pulumi.Input<string>;
    groups?: pulumi.Input<pulumi.Input<string>[]>;
    hashMode?: pulumi.Input<string>;
    healthChecks?: pulumi.Input<pulumi.Input<string>[]>;
    holdDownTime?: pulumi.Input<number>;
    inputDeviceNegate?: pulumi.Input<string>;
    inputDevices?: pulumi.Input<pulumi.Input<string>[]>;
    inputZones?: pulumi.Input<pulumi.Input<string>[]>;
    internetService?: pulumi.Input<string>;
    internetServiceAppCtrlCategories?: pulumi.Input<pulumi.Input<number>[]>;
    internetServiceAppCtrlGroups?: pulumi.Input<pulumi.Input<string>[]>;
    internetServiceAppCtrls?: pulumi.Input<pulumi.Input<number>[]>;
    internetServiceCustomGroups?: pulumi.Input<pulumi.Input<string>[]>;
    internetServiceCustoms?: pulumi.Input<pulumi.Input<string>[]>;
    internetServiceGroups?: pulumi.Input<pulumi.Input<string>[]>;
    internetServiceNames?: pulumi.Input<pulumi.Input<string>[]>;
    jitterWeight?: pulumi.Input<number>;
    latencyWeight?: pulumi.Input<number>;
    linkCostFactor?: pulumi.Input<string>;
    linkCostThreshold?: pulumi.Input<number>;
    loadBalance?: pulumi.Input<string>;
    minimumSlaMeetMembers?: pulumi.Input<number>;
    mode?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    packetLossWeight?: pulumi.Input<number>;
    passiveMeasurement?: pulumi.Input<string>;
    priorityMembers?: pulumi.Input<pulumi.Input<string>[]>;
    priorityZones?: pulumi.Input<pulumi.Input<string>[]>;
    protocol?: pulumi.Input<number>;
    qualityLink?: pulumi.Input<number>;
    role?: pulumi.Input<string>;
    routeTag?: pulumi.Input<number>;
    shortcut?: pulumi.Input<string>;
    shortcutPriority?: pulumi.Input<string>;
    slaCompareMethod?: pulumi.Input<string>;
    slaStickiness?: pulumi.Input<string>;
    slas?: pulumi.Input<pulumi.Input<inputs.SystemSdwanServiceSla>[]>;
    src6s?: pulumi.Input<pulumi.Input<string>[]>;
    srcNegate?: pulumi.Input<string>;
    srcs?: pulumi.Input<pulumi.Input<string>[]>;
    standaloneAction?: pulumi.Input<string>;
    startPort?: pulumi.Input<number>;
    startSrcPort?: pulumi.Input<number>;
    status?: pulumi.Input<string>;
    tieBreak?: pulumi.Input<string>;
    tos?: pulumi.Input<string>;
    tosMask?: pulumi.Input<string>;
    useShortcutSla?: pulumi.Input<string>;
    users?: pulumi.Input<pulumi.Input<string>[]>;
    zoneMode?: pulumi.Input<string>;
}
