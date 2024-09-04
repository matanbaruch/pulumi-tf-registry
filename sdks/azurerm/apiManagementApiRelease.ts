// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ApiManagementApiRelease extends pulumi.CustomResource {
    /**
     * Get an existing ApiManagementApiRelease resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApiManagementApiReleaseState, opts?: pulumi.CustomResourceOptions): ApiManagementApiRelease {
        return new ApiManagementApiRelease(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/apiManagementApiRelease:ApiManagementApiRelease';

    /**
     * Returns true if the given object is an instance of ApiManagementApiRelease.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApiManagementApiRelease {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApiManagementApiRelease.__pulumiType;
    }

    public readonly apiId!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly notes!: pulumi.Output<string | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.ApiManagementApiReleaseTimeouts | undefined>;

    /**
     * Create a ApiManagementApiRelease resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiManagementApiReleaseArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApiManagementApiReleaseArgs | ApiManagementApiReleaseState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ApiManagementApiReleaseState | undefined;
            resourceInputs["apiId"] = state ? state.apiId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["notes"] = state ? state.notes : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ApiManagementApiReleaseArgs | undefined;
            if ((!args || args.apiId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiId'");
            }
            resourceInputs["apiId"] = args ? args.apiId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["notes"] = args ? args.notes : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ApiManagementApiRelease.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ApiManagementApiRelease resources.
 */
export interface ApiManagementApiReleaseState {
    apiId?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    notes?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ApiManagementApiReleaseTimeouts>;
}

/**
 * The set of arguments for constructing a ApiManagementApiRelease resource.
 */
export interface ApiManagementApiReleaseArgs {
    apiId: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    notes?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ApiManagementApiReleaseTimeouts>;
}
