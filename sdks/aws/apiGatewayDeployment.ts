// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ApiGatewayDeployment extends pulumi.CustomResource {
    /**
     * Get an existing ApiGatewayDeployment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApiGatewayDeploymentState, opts?: pulumi.CustomResourceOptions): ApiGatewayDeployment {
        return new ApiGatewayDeployment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/apiGatewayDeployment:ApiGatewayDeployment';

    /**
     * Returns true if the given object is an instance of ApiGatewayDeployment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApiGatewayDeployment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApiGatewayDeployment.__pulumiType;
    }

    public readonly canarySettings!: pulumi.Output<outputs.ApiGatewayDeploymentCanarySettings | undefined>;
    public /*out*/ readonly createdDate!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string | undefined>;
    public /*out*/ readonly executionArn!: pulumi.Output<string>;
    public /*out*/ readonly invokeUrl!: pulumi.Output<string>;
    public readonly restApiId!: pulumi.Output<string>;
    public readonly stageDescription!: pulumi.Output<string | undefined>;
    public readonly stageName!: pulumi.Output<string | undefined>;
    public readonly triggers!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly variables!: pulumi.Output<{[key: string]: string} | undefined>;

    /**
     * Create a ApiGatewayDeployment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiGatewayDeploymentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApiGatewayDeploymentArgs | ApiGatewayDeploymentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ApiGatewayDeploymentState | undefined;
            resourceInputs["canarySettings"] = state ? state.canarySettings : undefined;
            resourceInputs["createdDate"] = state ? state.createdDate : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["executionArn"] = state ? state.executionArn : undefined;
            resourceInputs["invokeUrl"] = state ? state.invokeUrl : undefined;
            resourceInputs["restApiId"] = state ? state.restApiId : undefined;
            resourceInputs["stageDescription"] = state ? state.stageDescription : undefined;
            resourceInputs["stageName"] = state ? state.stageName : undefined;
            resourceInputs["triggers"] = state ? state.triggers : undefined;
            resourceInputs["variables"] = state ? state.variables : undefined;
        } else {
            const args = argsOrState as ApiGatewayDeploymentArgs | undefined;
            if ((!args || args.restApiId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'restApiId'");
            }
            resourceInputs["canarySettings"] = args ? args.canarySettings : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["restApiId"] = args ? args.restApiId : undefined;
            resourceInputs["stageDescription"] = args ? args.stageDescription : undefined;
            resourceInputs["stageName"] = args ? args.stageName : undefined;
            resourceInputs["triggers"] = args ? args.triggers : undefined;
            resourceInputs["variables"] = args ? args.variables : undefined;
            resourceInputs["createdDate"] = undefined /*out*/;
            resourceInputs["executionArn"] = undefined /*out*/;
            resourceInputs["invokeUrl"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ApiGatewayDeployment.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ApiGatewayDeployment resources.
 */
export interface ApiGatewayDeploymentState {
    canarySettings?: pulumi.Input<inputs.ApiGatewayDeploymentCanarySettings>;
    createdDate?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    executionArn?: pulumi.Input<string>;
    invokeUrl?: pulumi.Input<string>;
    restApiId?: pulumi.Input<string>;
    stageDescription?: pulumi.Input<string>;
    stageName?: pulumi.Input<string>;
    triggers?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    variables?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The set of arguments for constructing a ApiGatewayDeployment resource.
 */
export interface ApiGatewayDeploymentArgs {
    canarySettings?: pulumi.Input<inputs.ApiGatewayDeploymentCanarySettings>;
    description?: pulumi.Input<string>;
    restApiId: pulumi.Input<string>;
    stageDescription?: pulumi.Input<string>;
    stageName?: pulumi.Input<string>;
    triggers?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    variables?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
