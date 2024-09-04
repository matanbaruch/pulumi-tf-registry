// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DestinationQdrant extends pulumi.CustomResource {
    /**
     * Get an existing DestinationQdrant resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DestinationQdrantState, opts?: pulumi.CustomResourceOptions): DestinationQdrant {
        return new DestinationQdrant(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'airbyte:index/destinationQdrant:DestinationQdrant';

    /**
     * Returns true if the given object is an instance of DestinationQdrant.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DestinationQdrant {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DestinationQdrant.__pulumiType;
    }

    /**
     * The configuration model for the Vector DB based destinations. This model is used to generate the UI for the destination
     * configuration, as well as to provide type safety for the configuration passed to the destination. The configuration
     * model is composed of four parts: * Processing configuration * Embedding configuration * Indexing configuration *
     * Advanced configuration Processing, embedding and advanced configuration are provided by this base class, while the
     * indexing configuration is provided by the destination connector in the sub class.
     */
    public readonly configuration!: pulumi.Output<outputs.DestinationQdrantConfiguration>;
    /**
     * The UUID of the connector definition. One of configuration.destinationType or definitionId must be provided. Requires
     * replacement if changed.
     */
    public readonly definitionId!: pulumi.Output<string | undefined>;
    public /*out*/ readonly destinationId!: pulumi.Output<string>;
    public /*out*/ readonly destinationType!: pulumi.Output<string>;
    /**
     * Name of the destination e.g. dev-mysql-instance.
     */
    public readonly name!: pulumi.Output<string>;
    public readonly workspaceId!: pulumi.Output<string>;

    /**
     * Create a DestinationQdrant resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DestinationQdrantArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DestinationQdrantArgs | DestinationQdrantState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DestinationQdrantState | undefined;
            resourceInputs["configuration"] = state ? state.configuration : undefined;
            resourceInputs["definitionId"] = state ? state.definitionId : undefined;
            resourceInputs["destinationId"] = state ? state.destinationId : undefined;
            resourceInputs["destinationType"] = state ? state.destinationType : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["workspaceId"] = state ? state.workspaceId : undefined;
        } else {
            const args = argsOrState as DestinationQdrantArgs | undefined;
            if ((!args || args.configuration === undefined) && !opts.urn) {
                throw new Error("Missing required property 'configuration'");
            }
            if ((!args || args.workspaceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceId'");
            }
            resourceInputs["configuration"] = args ? args.configuration : undefined;
            resourceInputs["definitionId"] = args ? args.definitionId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["workspaceId"] = args ? args.workspaceId : undefined;
            resourceInputs["destinationId"] = undefined /*out*/;
            resourceInputs["destinationType"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DestinationQdrant.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DestinationQdrant resources.
 */
export interface DestinationQdrantState {
    /**
     * The configuration model for the Vector DB based destinations. This model is used to generate the UI for the destination
     * configuration, as well as to provide type safety for the configuration passed to the destination. The configuration
     * model is composed of four parts: * Processing configuration * Embedding configuration * Indexing configuration *
     * Advanced configuration Processing, embedding and advanced configuration are provided by this base class, while the
     * indexing configuration is provided by the destination connector in the sub class.
     */
    configuration?: pulumi.Input<inputs.DestinationQdrantConfiguration>;
    /**
     * The UUID of the connector definition. One of configuration.destinationType or definitionId must be provided. Requires
     * replacement if changed.
     */
    definitionId?: pulumi.Input<string>;
    destinationId?: pulumi.Input<string>;
    destinationType?: pulumi.Input<string>;
    /**
     * Name of the destination e.g. dev-mysql-instance.
     */
    name?: pulumi.Input<string>;
    workspaceId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DestinationQdrant resource.
 */
export interface DestinationQdrantArgs {
    /**
     * The configuration model for the Vector DB based destinations. This model is used to generate the UI for the destination
     * configuration, as well as to provide type safety for the configuration passed to the destination. The configuration
     * model is composed of four parts: * Processing configuration * Embedding configuration * Indexing configuration *
     * Advanced configuration Processing, embedding and advanced configuration are provided by this base class, while the
     * indexing configuration is provided by the destination connector in the sub class.
     */
    configuration: pulumi.Input<inputs.DestinationQdrantConfiguration>;
    /**
     * The UUID of the connector definition. One of configuration.destinationType or definitionId must be provided. Requires
     * replacement if changed.
     */
    definitionId?: pulumi.Input<string>;
    /**
     * Name of the destination e.g. dev-mysql-instance.
     */
    name?: pulumi.Input<string>;
    workspaceId: pulumi.Input<string>;
}
