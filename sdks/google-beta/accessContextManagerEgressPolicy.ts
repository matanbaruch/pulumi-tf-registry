// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AccessContextManagerEgressPolicy extends pulumi.CustomResource {
    /**
     * Get an existing AccessContextManagerEgressPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AccessContextManagerEgressPolicyState, opts?: pulumi.CustomResourceOptions): AccessContextManagerEgressPolicy {
        return new AccessContextManagerEgressPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/accessContextManagerEgressPolicy:AccessContextManagerEgressPolicy';

    /**
     * Returns true if the given object is an instance of AccessContextManagerEgressPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AccessContextManagerEgressPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AccessContextManagerEgressPolicy.__pulumiType;
    }

    /**
     * The name of the Service Perimeter to add this resource to.
     */
    public readonly egressPolicyName!: pulumi.Output<string>;
    /**
     * A GCP resource that is inside of the service perimeter.
     */
    public readonly resource!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.AccessContextManagerEgressPolicyTimeouts | undefined>;

    /**
     * Create a AccessContextManagerEgressPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AccessContextManagerEgressPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AccessContextManagerEgressPolicyArgs | AccessContextManagerEgressPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AccessContextManagerEgressPolicyState | undefined;
            resourceInputs["egressPolicyName"] = state ? state.egressPolicyName : undefined;
            resourceInputs["resource"] = state ? state.resource : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as AccessContextManagerEgressPolicyArgs | undefined;
            if ((!args || args.egressPolicyName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'egressPolicyName'");
            }
            if ((!args || args.resource === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resource'");
            }
            resourceInputs["egressPolicyName"] = args ? args.egressPolicyName : undefined;
            resourceInputs["resource"] = args ? args.resource : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AccessContextManagerEgressPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AccessContextManagerEgressPolicy resources.
 */
export interface AccessContextManagerEgressPolicyState {
    /**
     * The name of the Service Perimeter to add this resource to.
     */
    egressPolicyName?: pulumi.Input<string>;
    /**
     * A GCP resource that is inside of the service perimeter.
     */
    resource?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.AccessContextManagerEgressPolicyTimeouts>;
}

/**
 * The set of arguments for constructing a AccessContextManagerEgressPolicy resource.
 */
export interface AccessContextManagerEgressPolicyArgs {
    /**
     * The name of the Service Perimeter to add this resource to.
     */
    egressPolicyName: pulumi.Input<string>;
    /**
     * A GCP resource that is inside of the service perimeter.
     */
    resource: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.AccessContextManagerEgressPolicyTimeouts>;
}
