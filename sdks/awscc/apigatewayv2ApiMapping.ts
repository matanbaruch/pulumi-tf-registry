// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Apigatewayv2ApiMapping extends pulumi.CustomResource {
    /**
     * Get an existing Apigatewayv2ApiMapping resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Apigatewayv2ApiMappingState, opts?: pulumi.CustomResourceOptions): Apigatewayv2ApiMapping {
        return new Apigatewayv2ApiMapping(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/apigatewayv2ApiMapping:Apigatewayv2ApiMapping';

    /**
     * Returns true if the given object is an instance of Apigatewayv2ApiMapping.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Apigatewayv2ApiMapping {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Apigatewayv2ApiMapping.__pulumiType;
    }

    /**
     * The identifier of the API.
     */
    public readonly apiId!: pulumi.Output<string>;
    public /*out*/ readonly apiMappingId!: pulumi.Output<string>;
    /**
     * The API mapping key.
     */
    public readonly apiMappingKey!: pulumi.Output<string>;
    /**
     * The domain name.
     */
    public readonly domainName!: pulumi.Output<string>;
    /**
     * The API stage.
     */
    public readonly stage!: pulumi.Output<string>;

    /**
     * Create a Apigatewayv2ApiMapping resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: Apigatewayv2ApiMappingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Apigatewayv2ApiMappingArgs | Apigatewayv2ApiMappingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Apigatewayv2ApiMappingState | undefined;
            resourceInputs["apiId"] = state ? state.apiId : undefined;
            resourceInputs["apiMappingId"] = state ? state.apiMappingId : undefined;
            resourceInputs["apiMappingKey"] = state ? state.apiMappingKey : undefined;
            resourceInputs["domainName"] = state ? state.domainName : undefined;
            resourceInputs["stage"] = state ? state.stage : undefined;
        } else {
            const args = argsOrState as Apigatewayv2ApiMappingArgs | undefined;
            if ((!args || args.apiId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiId'");
            }
            if ((!args || args.domainName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'domainName'");
            }
            if ((!args || args.stage === undefined) && !opts.urn) {
                throw new Error("Missing required property 'stage'");
            }
            resourceInputs["apiId"] = args ? args.apiId : undefined;
            resourceInputs["apiMappingKey"] = args ? args.apiMappingKey : undefined;
            resourceInputs["domainName"] = args ? args.domainName : undefined;
            resourceInputs["stage"] = args ? args.stage : undefined;
            resourceInputs["apiMappingId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Apigatewayv2ApiMapping.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Apigatewayv2ApiMapping resources.
 */
export interface Apigatewayv2ApiMappingState {
    /**
     * The identifier of the API.
     */
    apiId?: pulumi.Input<string>;
    apiMappingId?: pulumi.Input<string>;
    /**
     * The API mapping key.
     */
    apiMappingKey?: pulumi.Input<string>;
    /**
     * The domain name.
     */
    domainName?: pulumi.Input<string>;
    /**
     * The API stage.
     */
    stage?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Apigatewayv2ApiMapping resource.
 */
export interface Apigatewayv2ApiMappingArgs {
    /**
     * The identifier of the API.
     */
    apiId: pulumi.Input<string>;
    /**
     * The API mapping key.
     */
    apiMappingKey?: pulumi.Input<string>;
    /**
     * The domain name.
     */
    domainName: pulumi.Input<string>;
    /**
     * The API stage.
     */
    stage: pulumi.Input<string>;
}
