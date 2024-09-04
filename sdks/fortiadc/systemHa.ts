// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemHa extends pulumi.CustomResource {
    /**
     * Get an existing SystemHa resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemHaState, opts?: pulumi.CustomResourceOptions): SystemHa {
        return new SystemHa(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortiadc:index/systemHa:SystemHa';

    /**
     * Returns true if the given object is an instance of SystemHa.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemHa {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemHa.__pulumiType;
    }

    public readonly arpInterval!: pulumi.Output<string>;
    public readonly arpNum!: pulumi.Output<string>;
    public readonly configPriority!: pulumi.Output<string>;
    public readonly datadev!: pulumi.Output<string>;
    public readonly failoverHoldTime!: pulumi.Output<string>;
    public readonly failoverThreshold!: pulumi.Output<string>;
    public readonly groupName!: pulumi.Output<string>;
    public readonly groupid!: pulumi.Output<string>;
    public readonly hbLostThreshold!: pulumi.Output<string>;
    public readonly hbdev!: pulumi.Output<string>;
    public readonly hbtype!: pulumi.Output<string>;
    public readonly interfaceList!: pulumi.Output<string>;
    public readonly interval!: pulumi.Output<string>;
    public readonly localAddress!: pulumi.Output<string>;
    public readonly localNodeId!: pulumi.Output<string>;
    public readonly mgmtInterface!: pulumi.Output<string>;
    public readonly mgmtIp!: pulumi.Output<string>;
    public readonly mgmtIpAllowaccess!: pulumi.Output<string>;
    public readonly mgmtStatus!: pulumi.Output<string>;
    public readonly mode!: pulumi.Output<string>;
    public readonly monitorEnable!: pulumi.Output<string>;
    public readonly nodeList!: pulumi.Output<string>;
    public readonly override!: pulumi.Output<string>;
    public readonly peerAddress!: pulumi.Output<string>;
    public readonly priority!: pulumi.Output<string>;
    public readonly syncL4Connection!: pulumi.Output<string>;
    public readonly syncL4Persistent!: pulumi.Output<string>;
    public readonly syncL7Persistent!: pulumi.Output<string>;

    /**
     * Create a SystemHa resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemHaArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemHaArgs | SystemHaState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemHaState | undefined;
            resourceInputs["arpInterval"] = state ? state.arpInterval : undefined;
            resourceInputs["arpNum"] = state ? state.arpNum : undefined;
            resourceInputs["configPriority"] = state ? state.configPriority : undefined;
            resourceInputs["datadev"] = state ? state.datadev : undefined;
            resourceInputs["failoverHoldTime"] = state ? state.failoverHoldTime : undefined;
            resourceInputs["failoverThreshold"] = state ? state.failoverThreshold : undefined;
            resourceInputs["groupName"] = state ? state.groupName : undefined;
            resourceInputs["groupid"] = state ? state.groupid : undefined;
            resourceInputs["hbLostThreshold"] = state ? state.hbLostThreshold : undefined;
            resourceInputs["hbdev"] = state ? state.hbdev : undefined;
            resourceInputs["hbtype"] = state ? state.hbtype : undefined;
            resourceInputs["interfaceList"] = state ? state.interfaceList : undefined;
            resourceInputs["interval"] = state ? state.interval : undefined;
            resourceInputs["localAddress"] = state ? state.localAddress : undefined;
            resourceInputs["localNodeId"] = state ? state.localNodeId : undefined;
            resourceInputs["mgmtInterface"] = state ? state.mgmtInterface : undefined;
            resourceInputs["mgmtIp"] = state ? state.mgmtIp : undefined;
            resourceInputs["mgmtIpAllowaccess"] = state ? state.mgmtIpAllowaccess : undefined;
            resourceInputs["mgmtStatus"] = state ? state.mgmtStatus : undefined;
            resourceInputs["mode"] = state ? state.mode : undefined;
            resourceInputs["monitorEnable"] = state ? state.monitorEnable : undefined;
            resourceInputs["nodeList"] = state ? state.nodeList : undefined;
            resourceInputs["override"] = state ? state.override : undefined;
            resourceInputs["peerAddress"] = state ? state.peerAddress : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["syncL4Connection"] = state ? state.syncL4Connection : undefined;
            resourceInputs["syncL4Persistent"] = state ? state.syncL4Persistent : undefined;
            resourceInputs["syncL7Persistent"] = state ? state.syncL7Persistent : undefined;
        } else {
            const args = argsOrState as SystemHaArgs | undefined;
            resourceInputs["arpInterval"] = args ? args.arpInterval : undefined;
            resourceInputs["arpNum"] = args ? args.arpNum : undefined;
            resourceInputs["configPriority"] = args ? args.configPriority : undefined;
            resourceInputs["datadev"] = args ? args.datadev : undefined;
            resourceInputs["failoverHoldTime"] = args ? args.failoverHoldTime : undefined;
            resourceInputs["failoverThreshold"] = args ? args.failoverThreshold : undefined;
            resourceInputs["groupName"] = args ? args.groupName : undefined;
            resourceInputs["groupid"] = args ? args.groupid : undefined;
            resourceInputs["hbLostThreshold"] = args ? args.hbLostThreshold : undefined;
            resourceInputs["hbdev"] = args ? args.hbdev : undefined;
            resourceInputs["hbtype"] = args ? args.hbtype : undefined;
            resourceInputs["interfaceList"] = args ? args.interfaceList : undefined;
            resourceInputs["interval"] = args ? args.interval : undefined;
            resourceInputs["localAddress"] = args ? args.localAddress : undefined;
            resourceInputs["localNodeId"] = args ? args.localNodeId : undefined;
            resourceInputs["mgmtInterface"] = args ? args.mgmtInterface : undefined;
            resourceInputs["mgmtIp"] = args ? args.mgmtIp : undefined;
            resourceInputs["mgmtIpAllowaccess"] = args ? args.mgmtIpAllowaccess : undefined;
            resourceInputs["mgmtStatus"] = args ? args.mgmtStatus : undefined;
            resourceInputs["mode"] = args ? args.mode : undefined;
            resourceInputs["monitorEnable"] = args ? args.monitorEnable : undefined;
            resourceInputs["nodeList"] = args ? args.nodeList : undefined;
            resourceInputs["override"] = args ? args.override : undefined;
            resourceInputs["peerAddress"] = args ? args.peerAddress : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["syncL4Connection"] = args ? args.syncL4Connection : undefined;
            resourceInputs["syncL4Persistent"] = args ? args.syncL4Persistent : undefined;
            resourceInputs["syncL7Persistent"] = args ? args.syncL7Persistent : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemHa.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemHa resources.
 */
export interface SystemHaState {
    arpInterval?: pulumi.Input<string>;
    arpNum?: pulumi.Input<string>;
    configPriority?: pulumi.Input<string>;
    datadev?: pulumi.Input<string>;
    failoverHoldTime?: pulumi.Input<string>;
    failoverThreshold?: pulumi.Input<string>;
    groupName?: pulumi.Input<string>;
    groupid?: pulumi.Input<string>;
    hbLostThreshold?: pulumi.Input<string>;
    hbdev?: pulumi.Input<string>;
    hbtype?: pulumi.Input<string>;
    interfaceList?: pulumi.Input<string>;
    interval?: pulumi.Input<string>;
    localAddress?: pulumi.Input<string>;
    localNodeId?: pulumi.Input<string>;
    mgmtInterface?: pulumi.Input<string>;
    mgmtIp?: pulumi.Input<string>;
    mgmtIpAllowaccess?: pulumi.Input<string>;
    mgmtStatus?: pulumi.Input<string>;
    mode?: pulumi.Input<string>;
    monitorEnable?: pulumi.Input<string>;
    nodeList?: pulumi.Input<string>;
    override?: pulumi.Input<string>;
    peerAddress?: pulumi.Input<string>;
    priority?: pulumi.Input<string>;
    syncL4Connection?: pulumi.Input<string>;
    syncL4Persistent?: pulumi.Input<string>;
    syncL7Persistent?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemHa resource.
 */
export interface SystemHaArgs {
    arpInterval?: pulumi.Input<string>;
    arpNum?: pulumi.Input<string>;
    configPriority?: pulumi.Input<string>;
    datadev?: pulumi.Input<string>;
    failoverHoldTime?: pulumi.Input<string>;
    failoverThreshold?: pulumi.Input<string>;
    groupName?: pulumi.Input<string>;
    groupid?: pulumi.Input<string>;
    hbLostThreshold?: pulumi.Input<string>;
    hbdev?: pulumi.Input<string>;
    hbtype?: pulumi.Input<string>;
    interfaceList?: pulumi.Input<string>;
    interval?: pulumi.Input<string>;
    localAddress?: pulumi.Input<string>;
    localNodeId?: pulumi.Input<string>;
    mgmtInterface?: pulumi.Input<string>;
    mgmtIp?: pulumi.Input<string>;
    mgmtIpAllowaccess?: pulumi.Input<string>;
    mgmtStatus?: pulumi.Input<string>;
    mode?: pulumi.Input<string>;
    monitorEnable?: pulumi.Input<string>;
    nodeList?: pulumi.Input<string>;
    override?: pulumi.Input<string>;
    peerAddress?: pulumi.Input<string>;
    priority?: pulumi.Input<string>;
    syncL4Connection?: pulumi.Input<string>;
    syncL4Persistent?: pulumi.Input<string>;
    syncL7Persistent?: pulumi.Input<string>;
}
