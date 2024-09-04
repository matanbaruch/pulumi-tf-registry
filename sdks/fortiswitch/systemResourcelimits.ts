// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemResourcelimits extends pulumi.CustomResource {
    /**
     * Get an existing SystemResourcelimits resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemResourcelimitsState, opts?: pulumi.CustomResourceOptions): SystemResourcelimits {
        return new SystemResourcelimits(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortiswitch:index/systemResourcelimits:SystemResourcelimits';

    /**
     * Returns true if the given object is an instance of SystemResourcelimits.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemResourcelimits {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemResourcelimits.__pulumiType;
    }

    public readonly customService!: pulumi.Output<number>;
    public readonly dialupTunnel!: pulumi.Output<number>;
    public readonly firewallAddress!: pulumi.Output<number>;
    public readonly firewallAddrgrp!: pulumi.Output<number>;
    public readonly firewallPolicy!: pulumi.Output<number>;
    public readonly ipsecPhase1!: pulumi.Output<number>;
    public readonly ipsecPhase2!: pulumi.Output<number>;
    public readonly logDiskQuota!: pulumi.Output<number>;
    public readonly onetimeSchedule!: pulumi.Output<number>;
    public readonly proxy!: pulumi.Output<number>;
    public readonly recurringSchedule!: pulumi.Output<number>;
    public readonly serviceGroup!: pulumi.Output<number>;
    public readonly session!: pulumi.Output<number>;
    public readonly user!: pulumi.Output<number>;
    public readonly userGroup!: pulumi.Output<number>;

    /**
     * Create a SystemResourcelimits resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemResourcelimitsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemResourcelimitsArgs | SystemResourcelimitsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemResourcelimitsState | undefined;
            resourceInputs["customService"] = state ? state.customService : undefined;
            resourceInputs["dialupTunnel"] = state ? state.dialupTunnel : undefined;
            resourceInputs["firewallAddress"] = state ? state.firewallAddress : undefined;
            resourceInputs["firewallAddrgrp"] = state ? state.firewallAddrgrp : undefined;
            resourceInputs["firewallPolicy"] = state ? state.firewallPolicy : undefined;
            resourceInputs["ipsecPhase1"] = state ? state.ipsecPhase1 : undefined;
            resourceInputs["ipsecPhase2"] = state ? state.ipsecPhase2 : undefined;
            resourceInputs["logDiskQuota"] = state ? state.logDiskQuota : undefined;
            resourceInputs["onetimeSchedule"] = state ? state.onetimeSchedule : undefined;
            resourceInputs["proxy"] = state ? state.proxy : undefined;
            resourceInputs["recurringSchedule"] = state ? state.recurringSchedule : undefined;
            resourceInputs["serviceGroup"] = state ? state.serviceGroup : undefined;
            resourceInputs["session"] = state ? state.session : undefined;
            resourceInputs["user"] = state ? state.user : undefined;
            resourceInputs["userGroup"] = state ? state.userGroup : undefined;
        } else {
            const args = argsOrState as SystemResourcelimitsArgs | undefined;
            resourceInputs["customService"] = args ? args.customService : undefined;
            resourceInputs["dialupTunnel"] = args ? args.dialupTunnel : undefined;
            resourceInputs["firewallAddress"] = args ? args.firewallAddress : undefined;
            resourceInputs["firewallAddrgrp"] = args ? args.firewallAddrgrp : undefined;
            resourceInputs["firewallPolicy"] = args ? args.firewallPolicy : undefined;
            resourceInputs["ipsecPhase1"] = args ? args.ipsecPhase1 : undefined;
            resourceInputs["ipsecPhase2"] = args ? args.ipsecPhase2 : undefined;
            resourceInputs["logDiskQuota"] = args ? args.logDiskQuota : undefined;
            resourceInputs["onetimeSchedule"] = args ? args.onetimeSchedule : undefined;
            resourceInputs["proxy"] = args ? args.proxy : undefined;
            resourceInputs["recurringSchedule"] = args ? args.recurringSchedule : undefined;
            resourceInputs["serviceGroup"] = args ? args.serviceGroup : undefined;
            resourceInputs["session"] = args ? args.session : undefined;
            resourceInputs["user"] = args ? args.user : undefined;
            resourceInputs["userGroup"] = args ? args.userGroup : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemResourcelimits.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemResourcelimits resources.
 */
export interface SystemResourcelimitsState {
    customService?: pulumi.Input<number>;
    dialupTunnel?: pulumi.Input<number>;
    firewallAddress?: pulumi.Input<number>;
    firewallAddrgrp?: pulumi.Input<number>;
    firewallPolicy?: pulumi.Input<number>;
    ipsecPhase1?: pulumi.Input<number>;
    ipsecPhase2?: pulumi.Input<number>;
    logDiskQuota?: pulumi.Input<number>;
    onetimeSchedule?: pulumi.Input<number>;
    proxy?: pulumi.Input<number>;
    recurringSchedule?: pulumi.Input<number>;
    serviceGroup?: pulumi.Input<number>;
    session?: pulumi.Input<number>;
    user?: pulumi.Input<number>;
    userGroup?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a SystemResourcelimits resource.
 */
export interface SystemResourcelimitsArgs {
    customService?: pulumi.Input<number>;
    dialupTunnel?: pulumi.Input<number>;
    firewallAddress?: pulumi.Input<number>;
    firewallAddrgrp?: pulumi.Input<number>;
    firewallPolicy?: pulumi.Input<number>;
    ipsecPhase1?: pulumi.Input<number>;
    ipsecPhase2?: pulumi.Input<number>;
    logDiskQuota?: pulumi.Input<number>;
    onetimeSchedule?: pulumi.Input<number>;
    proxy?: pulumi.Input<number>;
    recurringSchedule?: pulumi.Input<number>;
    serviceGroup?: pulumi.Input<number>;
    session?: pulumi.Input<number>;
    user?: pulumi.Input<number>;
    userGroup?: pulumi.Input<number>;
}
