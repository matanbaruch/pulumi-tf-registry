// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ProfileMetricsForwarding extends pulumi.CustomResource {
    /**
     * Get an existing ProfileMetricsForwarding resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ProfileMetricsForwardingState, opts?: pulumi.CustomResourceOptions): ProfileMetricsForwarding {
        return new ProfileMetricsForwarding(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'valtix:index/profileMetricsForwarding:ProfileMetricsForwarding';

    /**
     * Returns true if the given object is an instance of ProfileMetricsForwarding.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ProfileMetricsForwarding {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ProfileMetricsForwarding.__pulumiType;
    }

    public readonly authToken!: pulumi.Output<string | undefined>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly destination!: pulumi.Output<string | undefined>;
    public readonly endpoint!: pulumi.Output<string | undefined>;
    public readonly groupMemberIds!: pulumi.Output<number[] | undefined>;
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly profileId!: pulumi.Output<number>;
    public readonly type!: pulumi.Output<string | undefined>;

    /**
     * Create a ProfileMetricsForwarding resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ProfileMetricsForwardingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ProfileMetricsForwardingArgs | ProfileMetricsForwardingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ProfileMetricsForwardingState | undefined;
            resourceInputs["authToken"] = state ? state.authToken : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["destination"] = state ? state.destination : undefined;
            resourceInputs["endpoint"] = state ? state.endpoint : undefined;
            resourceInputs["groupMemberIds"] = state ? state.groupMemberIds : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["profileId"] = state ? state.profileId : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as ProfileMetricsForwardingArgs | undefined;
            resourceInputs["authToken"] = args ? args.authToken : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["destination"] = args ? args.destination : undefined;
            resourceInputs["endpoint"] = args ? args.endpoint : undefined;
            resourceInputs["groupMemberIds"] = args ? args.groupMemberIds : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["profileId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ProfileMetricsForwarding.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ProfileMetricsForwarding resources.
 */
export interface ProfileMetricsForwardingState {
    authToken?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    destination?: pulumi.Input<string>;
    endpoint?: pulumi.Input<string>;
    groupMemberIds?: pulumi.Input<pulumi.Input<number>[]>;
    name?: pulumi.Input<string>;
    profileId?: pulumi.Input<number>;
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ProfileMetricsForwarding resource.
 */
export interface ProfileMetricsForwardingArgs {
    authToken?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    destination?: pulumi.Input<string>;
    endpoint?: pulumi.Input<string>;
    groupMemberIds?: pulumi.Input<pulumi.Input<number>[]>;
    name?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
}
