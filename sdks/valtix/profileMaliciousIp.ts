// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ProfileMaliciousIp extends pulumi.CustomResource {
    /**
     * Get an existing ProfileMaliciousIp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ProfileMaliciousIpState, opts?: pulumi.CustomResourceOptions): ProfileMaliciousIp {
        return new ProfileMaliciousIp(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'valtix:index/profileMaliciousIp:ProfileMaliciousIp';

    /**
     * Returns true if the given object is an instance of ProfileMaliciousIp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ProfileMaliciousIp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ProfileMaliciousIp.__pulumiType;
    }

    public readonly autoUpdate!: pulumi.Output<boolean | undefined>;
    public readonly delayByDays!: pulumi.Output<number | undefined>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly ipReputationEnabled!: pulumi.Output<boolean | undefined>;
    public readonly matchXff!: pulumi.Output<boolean | undefined>;
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly profileId!: pulumi.Output<number>;
    public readonly vendorRuleSetName!: pulumi.Output<string | undefined>;

    /**
     * Create a ProfileMaliciousIp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ProfileMaliciousIpArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ProfileMaliciousIpArgs | ProfileMaliciousIpState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ProfileMaliciousIpState | undefined;
            resourceInputs["autoUpdate"] = state ? state.autoUpdate : undefined;
            resourceInputs["delayByDays"] = state ? state.delayByDays : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["ipReputationEnabled"] = state ? state.ipReputationEnabled : undefined;
            resourceInputs["matchXff"] = state ? state.matchXff : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["profileId"] = state ? state.profileId : undefined;
            resourceInputs["vendorRuleSetName"] = state ? state.vendorRuleSetName : undefined;
        } else {
            const args = argsOrState as ProfileMaliciousIpArgs | undefined;
            resourceInputs["autoUpdate"] = args ? args.autoUpdate : undefined;
            resourceInputs["delayByDays"] = args ? args.delayByDays : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["ipReputationEnabled"] = args ? args.ipReputationEnabled : undefined;
            resourceInputs["matchXff"] = args ? args.matchXff : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["vendorRuleSetName"] = args ? args.vendorRuleSetName : undefined;
            resourceInputs["profileId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ProfileMaliciousIp.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ProfileMaliciousIp resources.
 */
export interface ProfileMaliciousIpState {
    autoUpdate?: pulumi.Input<boolean>;
    delayByDays?: pulumi.Input<number>;
    description?: pulumi.Input<string>;
    ipReputationEnabled?: pulumi.Input<boolean>;
    matchXff?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    profileId?: pulumi.Input<number>;
    vendorRuleSetName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ProfileMaliciousIp resource.
 */
export interface ProfileMaliciousIpArgs {
    autoUpdate?: pulumi.Input<boolean>;
    delayByDays?: pulumi.Input<number>;
    description?: pulumi.Input<string>;
    ipReputationEnabled?: pulumi.Input<boolean>;
    matchXff?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    vendorRuleSetName?: pulumi.Input<string>;
}
