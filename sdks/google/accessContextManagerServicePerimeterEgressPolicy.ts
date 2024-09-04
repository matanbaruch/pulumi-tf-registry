// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AccessContextManagerServicePerimeterEgressPolicy extends pulumi.CustomResource {
    /**
     * Get an existing AccessContextManagerServicePerimeterEgressPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AccessContextManagerServicePerimeterEgressPolicyState, opts?: pulumi.CustomResourceOptions): AccessContextManagerServicePerimeterEgressPolicy {
        return new AccessContextManagerServicePerimeterEgressPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/accessContextManagerServicePerimeterEgressPolicy:AccessContextManagerServicePerimeterEgressPolicy';

    /**
     * Returns true if the given object is an instance of AccessContextManagerServicePerimeterEgressPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AccessContextManagerServicePerimeterEgressPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AccessContextManagerServicePerimeterEgressPolicy.__pulumiType;
    }

    /**
     * Defines conditions on the source of a request causing this 'EgressPolicy' to apply.
     */
    public readonly egressFrom!: pulumi.Output<outputs.AccessContextManagerServicePerimeterEgressPolicyEgressFrom | undefined>;
    /**
     * Defines the conditions on the 'ApiOperation' and destination resources that cause this 'EgressPolicy' to apply.
     */
    public readonly egressTo!: pulumi.Output<outputs.AccessContextManagerServicePerimeterEgressPolicyEgressTo | undefined>;
    /**
     * The name of the Service Perimeter to add this resource to.
     */
    public readonly perimeter!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.AccessContextManagerServicePerimeterEgressPolicyTimeouts | undefined>;

    /**
     * Create a AccessContextManagerServicePerimeterEgressPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AccessContextManagerServicePerimeterEgressPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AccessContextManagerServicePerimeterEgressPolicyArgs | AccessContextManagerServicePerimeterEgressPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AccessContextManagerServicePerimeterEgressPolicyState | undefined;
            resourceInputs["egressFrom"] = state ? state.egressFrom : undefined;
            resourceInputs["egressTo"] = state ? state.egressTo : undefined;
            resourceInputs["perimeter"] = state ? state.perimeter : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as AccessContextManagerServicePerimeterEgressPolicyArgs | undefined;
            if ((!args || args.perimeter === undefined) && !opts.urn) {
                throw new Error("Missing required property 'perimeter'");
            }
            resourceInputs["egressFrom"] = args ? args.egressFrom : undefined;
            resourceInputs["egressTo"] = args ? args.egressTo : undefined;
            resourceInputs["perimeter"] = args ? args.perimeter : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AccessContextManagerServicePerimeterEgressPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AccessContextManagerServicePerimeterEgressPolicy resources.
 */
export interface AccessContextManagerServicePerimeterEgressPolicyState {
    /**
     * Defines conditions on the source of a request causing this 'EgressPolicy' to apply.
     */
    egressFrom?: pulumi.Input<inputs.AccessContextManagerServicePerimeterEgressPolicyEgressFrom>;
    /**
     * Defines the conditions on the 'ApiOperation' and destination resources that cause this 'EgressPolicy' to apply.
     */
    egressTo?: pulumi.Input<inputs.AccessContextManagerServicePerimeterEgressPolicyEgressTo>;
    /**
     * The name of the Service Perimeter to add this resource to.
     */
    perimeter?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.AccessContextManagerServicePerimeterEgressPolicyTimeouts>;
}

/**
 * The set of arguments for constructing a AccessContextManagerServicePerimeterEgressPolicy resource.
 */
export interface AccessContextManagerServicePerimeterEgressPolicyArgs {
    /**
     * Defines conditions on the source of a request causing this 'EgressPolicy' to apply.
     */
    egressFrom?: pulumi.Input<inputs.AccessContextManagerServicePerimeterEgressPolicyEgressFrom>;
    /**
     * Defines the conditions on the 'ApiOperation' and destination resources that cause this 'EgressPolicy' to apply.
     */
    egressTo?: pulumi.Input<inputs.AccessContextManagerServicePerimeterEgressPolicyEgressTo>;
    /**
     * The name of the Service Perimeter to add this resource to.
     */
    perimeter: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.AccessContextManagerServicePerimeterEgressPolicyTimeouts>;
}
