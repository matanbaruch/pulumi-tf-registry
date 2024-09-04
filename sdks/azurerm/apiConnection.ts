// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ApiConnection extends pulumi.CustomResource {
    /**
     * Get an existing ApiConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApiConnectionState, opts?: pulumi.CustomResourceOptions): ApiConnection {
        return new ApiConnection(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/apiConnection:ApiConnection';

    /**
     * Returns true if the given object is an instance of ApiConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApiConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApiConnection.__pulumiType;
    }

    public readonly displayName!: pulumi.Output<string | undefined>;
    public readonly managedApiId!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly parameterValues!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly resourceGroupName!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.ApiConnectionTimeouts | undefined>;

    /**
     * Create a ApiConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiConnectionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApiConnectionArgs | ApiConnectionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ApiConnectionState | undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["managedApiId"] = state ? state.managedApiId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["parameterValues"] = state ? state.parameterValues : undefined;
            resourceInputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ApiConnectionArgs | undefined;
            if ((!args || args.managedApiId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'managedApiId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["managedApiId"] = args ? args.managedApiId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["parameterValues"] = args ? args.parameterValues : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ApiConnection.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ApiConnection resources.
 */
export interface ApiConnectionState {
    displayName?: pulumi.Input<string>;
    managedApiId?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    parameterValues?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    resourceGroupName?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.ApiConnectionTimeouts>;
}

/**
 * The set of arguments for constructing a ApiConnection resource.
 */
export interface ApiConnectionArgs {
    displayName?: pulumi.Input<string>;
    managedApiId: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    parameterValues?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    resourceGroupName: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.ApiConnectionTimeouts>;
}
