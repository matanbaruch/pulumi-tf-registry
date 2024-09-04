// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
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
    public static readonly __pulumiType = 'fortimanager:index/systemHa:SystemHa';

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

    public readonly clusterid!: pulumi.Output<number>;
    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly failoverMode!: pulumi.Output<string>;
    public readonly fileQuota!: pulumi.Output<number>;
    public readonly hbInterval!: pulumi.Output<number>;
    public readonly hbLostThreshold!: pulumi.Output<number>;
    public readonly localCert!: pulumi.Output<string | undefined>;
    public readonly mode!: pulumi.Output<string>;
    public readonly monitoredInterfaces!: pulumi.Output<outputs.SystemHaMonitoredInterface[] | undefined>;
    public readonly monitoredIps!: pulumi.Output<outputs.SystemHaMonitoredIp[] | undefined>;
    public readonly passwords!: pulumi.Output<string[]>;
    public readonly peers!: pulumi.Output<outputs.SystemHaPeer[] | undefined>;
    public readonly priority!: pulumi.Output<number>;
    public readonly unicast!: pulumi.Output<string>;
    public readonly vip!: pulumi.Output<string | undefined>;
    public readonly vipInterface!: pulumi.Output<string | undefined>;
    public readonly vrrpAdvInterval!: pulumi.Output<number>;
    public readonly vrrpInterface!: pulumi.Output<string | undefined>;

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
            resourceInputs["clusterid"] = state ? state.clusterid : undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["failoverMode"] = state ? state.failoverMode : undefined;
            resourceInputs["fileQuota"] = state ? state.fileQuota : undefined;
            resourceInputs["hbInterval"] = state ? state.hbInterval : undefined;
            resourceInputs["hbLostThreshold"] = state ? state.hbLostThreshold : undefined;
            resourceInputs["localCert"] = state ? state.localCert : undefined;
            resourceInputs["mode"] = state ? state.mode : undefined;
            resourceInputs["monitoredInterfaces"] = state ? state.monitoredInterfaces : undefined;
            resourceInputs["monitoredIps"] = state ? state.monitoredIps : undefined;
            resourceInputs["passwords"] = state ? state.passwords : undefined;
            resourceInputs["peers"] = state ? state.peers : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["unicast"] = state ? state.unicast : undefined;
            resourceInputs["vip"] = state ? state.vip : undefined;
            resourceInputs["vipInterface"] = state ? state.vipInterface : undefined;
            resourceInputs["vrrpAdvInterval"] = state ? state.vrrpAdvInterval : undefined;
            resourceInputs["vrrpInterface"] = state ? state.vrrpInterface : undefined;
        } else {
            const args = argsOrState as SystemHaArgs | undefined;
            resourceInputs["clusterid"] = args ? args.clusterid : undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["failoverMode"] = args ? args.failoverMode : undefined;
            resourceInputs["fileQuota"] = args ? args.fileQuota : undefined;
            resourceInputs["hbInterval"] = args ? args.hbInterval : undefined;
            resourceInputs["hbLostThreshold"] = args ? args.hbLostThreshold : undefined;
            resourceInputs["localCert"] = args ? args.localCert : undefined;
            resourceInputs["mode"] = args ? args.mode : undefined;
            resourceInputs["monitoredInterfaces"] = args ? args.monitoredInterfaces : undefined;
            resourceInputs["monitoredIps"] = args ? args.monitoredIps : undefined;
            resourceInputs["passwords"] = args?.passwords ? pulumi.secret(args.passwords) : undefined;
            resourceInputs["peers"] = args ? args.peers : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["unicast"] = args ? args.unicast : undefined;
            resourceInputs["vip"] = args ? args.vip : undefined;
            resourceInputs["vipInterface"] = args ? args.vipInterface : undefined;
            resourceInputs["vrrpAdvInterval"] = args ? args.vrrpAdvInterval : undefined;
            resourceInputs["vrrpInterface"] = args ? args.vrrpInterface : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["passwords"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(SystemHa.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemHa resources.
 */
export interface SystemHaState {
    clusterid?: pulumi.Input<number>;
    dynamicSortSubtable?: pulumi.Input<string>;
    failoverMode?: pulumi.Input<string>;
    fileQuota?: pulumi.Input<number>;
    hbInterval?: pulumi.Input<number>;
    hbLostThreshold?: pulumi.Input<number>;
    localCert?: pulumi.Input<string>;
    mode?: pulumi.Input<string>;
    monitoredInterfaces?: pulumi.Input<pulumi.Input<inputs.SystemHaMonitoredInterface>[]>;
    monitoredIps?: pulumi.Input<pulumi.Input<inputs.SystemHaMonitoredIp>[]>;
    passwords?: pulumi.Input<pulumi.Input<string>[]>;
    peers?: pulumi.Input<pulumi.Input<inputs.SystemHaPeer>[]>;
    priority?: pulumi.Input<number>;
    unicast?: pulumi.Input<string>;
    vip?: pulumi.Input<string>;
    vipInterface?: pulumi.Input<string>;
    vrrpAdvInterval?: pulumi.Input<number>;
    vrrpInterface?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemHa resource.
 */
export interface SystemHaArgs {
    clusterid?: pulumi.Input<number>;
    dynamicSortSubtable?: pulumi.Input<string>;
    failoverMode?: pulumi.Input<string>;
    fileQuota?: pulumi.Input<number>;
    hbInterval?: pulumi.Input<number>;
    hbLostThreshold?: pulumi.Input<number>;
    localCert?: pulumi.Input<string>;
    mode?: pulumi.Input<string>;
    monitoredInterfaces?: pulumi.Input<pulumi.Input<inputs.SystemHaMonitoredInterface>[]>;
    monitoredIps?: pulumi.Input<pulumi.Input<inputs.SystemHaMonitoredIp>[]>;
    passwords?: pulumi.Input<pulumi.Input<string>[]>;
    peers?: pulumi.Input<pulumi.Input<inputs.SystemHaPeer>[]>;
    priority?: pulumi.Input<number>;
    unicast?: pulumi.Input<string>;
    vip?: pulumi.Input<string>;
    vipInterface?: pulumi.Input<string>;
    vrrpAdvInterval?: pulumi.Input<number>;
    vrrpInterface?: pulumi.Input<string>;
}
