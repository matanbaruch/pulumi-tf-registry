// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class UserQuarantine extends pulumi.CustomResource {
    /**
     * Get an existing UserQuarantine resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UserQuarantineState, opts?: pulumi.CustomResourceOptions): UserQuarantine {
        return new UserQuarantine(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmgdevice:index/userQuarantine:UserQuarantine';

    /**
     * Returns true if the given object is an instance of UserQuarantine.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is UserQuarantine {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === UserQuarantine.__pulumiType;
    }

    public readonly deviceName!: pulumi.Output<string>;
    public readonly deviceVdom!: pulumi.Output<string>;
    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly firewallGroups!: pulumi.Output<string[]>;
    public readonly quarantine!: pulumi.Output<string>;
    public readonly targets!: pulumi.Output<outputs.UserQuarantineTarget[] | undefined>;
    public readonly trafficPolicies!: pulumi.Output<string[]>;

    /**
     * Create a UserQuarantine resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: UserQuarantineArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: UserQuarantineArgs | UserQuarantineState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as UserQuarantineState | undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["deviceVdom"] = state ? state.deviceVdom : undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["firewallGroups"] = state ? state.firewallGroups : undefined;
            resourceInputs["quarantine"] = state ? state.quarantine : undefined;
            resourceInputs["targets"] = state ? state.targets : undefined;
            resourceInputs["trafficPolicies"] = state ? state.trafficPolicies : undefined;
        } else {
            const args = argsOrState as UserQuarantineArgs | undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["deviceVdom"] = args ? args.deviceVdom : undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["firewallGroups"] = args ? args.firewallGroups : undefined;
            resourceInputs["quarantine"] = args ? args.quarantine : undefined;
            resourceInputs["targets"] = args ? args.targets : undefined;
            resourceInputs["trafficPolicies"] = args ? args.trafficPolicies : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(UserQuarantine.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering UserQuarantine resources.
 */
export interface UserQuarantineState {
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    firewallGroups?: pulumi.Input<pulumi.Input<string>[]>;
    quarantine?: pulumi.Input<string>;
    targets?: pulumi.Input<pulumi.Input<inputs.UserQuarantineTarget>[]>;
    trafficPolicies?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a UserQuarantine resource.
 */
export interface UserQuarantineArgs {
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    firewallGroups?: pulumi.Input<pulumi.Input<string>[]>;
    quarantine?: pulumi.Input<string>;
    targets?: pulumi.Input<pulumi.Input<inputs.UserQuarantineTarget>[]>;
    trafficPolicies?: pulumi.Input<pulumi.Input<string>[]>;
}
