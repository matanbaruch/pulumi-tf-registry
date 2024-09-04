// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AccessContextManagerServicePerimeterDryRunIngressPolicy extends pulumi.CustomResource {
    /**
     * Get an existing AccessContextManagerServicePerimeterDryRunIngressPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AccessContextManagerServicePerimeterDryRunIngressPolicyState, opts?: pulumi.CustomResourceOptions): AccessContextManagerServicePerimeterDryRunIngressPolicy {
        return new AccessContextManagerServicePerimeterDryRunIngressPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/accessContextManagerServicePerimeterDryRunIngressPolicy:AccessContextManagerServicePerimeterDryRunIngressPolicy';

    /**
     * Returns true if the given object is an instance of AccessContextManagerServicePerimeterDryRunIngressPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AccessContextManagerServicePerimeterDryRunIngressPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AccessContextManagerServicePerimeterDryRunIngressPolicy.__pulumiType;
    }

    /**
     * Defines the conditions on the source of a request causing this 'IngressPolicy' to apply.
     */
    public readonly ingressFrom!: pulumi.Output<outputs.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom | undefined>;
    /**
     * Defines the conditions on the 'ApiOperation' and request destination that cause this 'IngressPolicy' to apply.
     */
    public readonly ingressTo!: pulumi.Output<outputs.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo | undefined>;
    /**
     * The name of the Service Perimeter to add this resource to.
     */
    public readonly perimeter!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts | undefined>;

    /**
     * Create a AccessContextManagerServicePerimeterDryRunIngressPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AccessContextManagerServicePerimeterDryRunIngressPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AccessContextManagerServicePerimeterDryRunIngressPolicyArgs | AccessContextManagerServicePerimeterDryRunIngressPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AccessContextManagerServicePerimeterDryRunIngressPolicyState | undefined;
            resourceInputs["ingressFrom"] = state ? state.ingressFrom : undefined;
            resourceInputs["ingressTo"] = state ? state.ingressTo : undefined;
            resourceInputs["perimeter"] = state ? state.perimeter : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as AccessContextManagerServicePerimeterDryRunIngressPolicyArgs | undefined;
            if ((!args || args.perimeter === undefined) && !opts.urn) {
                throw new Error("Missing required property 'perimeter'");
            }
            resourceInputs["ingressFrom"] = args ? args.ingressFrom : undefined;
            resourceInputs["ingressTo"] = args ? args.ingressTo : undefined;
            resourceInputs["perimeter"] = args ? args.perimeter : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AccessContextManagerServicePerimeterDryRunIngressPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AccessContextManagerServicePerimeterDryRunIngressPolicy resources.
 */
export interface AccessContextManagerServicePerimeterDryRunIngressPolicyState {
    /**
     * Defines the conditions on the source of a request causing this 'IngressPolicy' to apply.
     */
    ingressFrom?: pulumi.Input<inputs.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom>;
    /**
     * Defines the conditions on the 'ApiOperation' and request destination that cause this 'IngressPolicy' to apply.
     */
    ingressTo?: pulumi.Input<inputs.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo>;
    /**
     * The name of the Service Perimeter to add this resource to.
     */
    perimeter?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts>;
}

/**
 * The set of arguments for constructing a AccessContextManagerServicePerimeterDryRunIngressPolicy resource.
 */
export interface AccessContextManagerServicePerimeterDryRunIngressPolicyArgs {
    /**
     * Defines the conditions on the source of a request causing this 'IngressPolicy' to apply.
     */
    ingressFrom?: pulumi.Input<inputs.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom>;
    /**
     * Defines the conditions on the 'ApiOperation' and request destination that cause this 'IngressPolicy' to apply.
     */
    ingressTo?: pulumi.Input<inputs.AccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo>;
    /**
     * The name of the Service Perimeter to add this resource to.
     */
    perimeter: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.AccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts>;
}
