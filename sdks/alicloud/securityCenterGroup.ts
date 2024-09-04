// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SecurityCenterGroup extends pulumi.CustomResource {
    /**
     * Get an existing SecurityCenterGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SecurityCenterGroupState, opts?: pulumi.CustomResourceOptions): SecurityCenterGroup {
        return new SecurityCenterGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/securityCenterGroup:SecurityCenterGroup';

    /**
     * Returns true if the given object is an instance of SecurityCenterGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SecurityCenterGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SecurityCenterGroup.__pulumiType;
    }

    public readonly groupId!: pulumi.Output<string>;
    public readonly groupName!: pulumi.Output<string | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.SecurityCenterGroupTimeouts | undefined>;

    /**
     * Create a SecurityCenterGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SecurityCenterGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SecurityCenterGroupArgs | SecurityCenterGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SecurityCenterGroupState | undefined;
            resourceInputs["groupId"] = state ? state.groupId : undefined;
            resourceInputs["groupName"] = state ? state.groupName : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as SecurityCenterGroupArgs | undefined;
            resourceInputs["groupId"] = args ? args.groupId : undefined;
            resourceInputs["groupName"] = args ? args.groupName : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SecurityCenterGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SecurityCenterGroup resources.
 */
export interface SecurityCenterGroupState {
    groupId?: pulumi.Input<string>;
    groupName?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SecurityCenterGroupTimeouts>;
}

/**
 * The set of arguments for constructing a SecurityCenterGroup resource.
 */
export interface SecurityCenterGroupArgs {
    groupId?: pulumi.Input<string>;
    groupName?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SecurityCenterGroupTimeouts>;
}
