// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Apigatewayv2Stage extends pulumi.CustomResource {
    /**
     * Get an existing Apigatewayv2Stage resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Apigatewayv2StageState, opts?: pulumi.CustomResourceOptions): Apigatewayv2Stage {
        return new Apigatewayv2Stage(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/apigatewayv2Stage:Apigatewayv2Stage';

    /**
     * Returns true if the given object is an instance of Apigatewayv2Stage.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Apigatewayv2Stage {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Apigatewayv2Stage.__pulumiType;
    }

    public readonly accessLogSettings!: pulumi.Output<outputs.Apigatewayv2StageAccessLogSettings | undefined>;
    public readonly apiId!: pulumi.Output<string>;
    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly autoDeploy!: pulumi.Output<boolean | undefined>;
    public readonly clientCertificateId!: pulumi.Output<string | undefined>;
    public readonly defaultRouteSettings!: pulumi.Output<outputs.Apigatewayv2StageDefaultRouteSettings | undefined>;
    public readonly deploymentId!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string | undefined>;
    public /*out*/ readonly executionArn!: pulumi.Output<string>;
    public /*out*/ readonly invokeUrl!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly routeSettings!: pulumi.Output<outputs.Apigatewayv2StageRouteSetting[] | undefined>;
    public readonly stageVariables!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tagsAll!: pulumi.Output<{[key: string]: string}>;

    /**
     * Create a Apigatewayv2Stage resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: Apigatewayv2StageArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Apigatewayv2StageArgs | Apigatewayv2StageState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Apigatewayv2StageState | undefined;
            resourceInputs["accessLogSettings"] = state ? state.accessLogSettings : undefined;
            resourceInputs["apiId"] = state ? state.apiId : undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["autoDeploy"] = state ? state.autoDeploy : undefined;
            resourceInputs["clientCertificateId"] = state ? state.clientCertificateId : undefined;
            resourceInputs["defaultRouteSettings"] = state ? state.defaultRouteSettings : undefined;
            resourceInputs["deploymentId"] = state ? state.deploymentId : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["executionArn"] = state ? state.executionArn : undefined;
            resourceInputs["invokeUrl"] = state ? state.invokeUrl : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["routeSettings"] = state ? state.routeSettings : undefined;
            resourceInputs["stageVariables"] = state ? state.stageVariables : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
        } else {
            const args = argsOrState as Apigatewayv2StageArgs | undefined;
            if ((!args || args.apiId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiId'");
            }
            resourceInputs["accessLogSettings"] = args ? args.accessLogSettings : undefined;
            resourceInputs["apiId"] = args ? args.apiId : undefined;
            resourceInputs["autoDeploy"] = args ? args.autoDeploy : undefined;
            resourceInputs["clientCertificateId"] = args ? args.clientCertificateId : undefined;
            resourceInputs["defaultRouteSettings"] = args ? args.defaultRouteSettings : undefined;
            resourceInputs["deploymentId"] = args ? args.deploymentId : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["routeSettings"] = args ? args.routeSettings : undefined;
            resourceInputs["stageVariables"] = args ? args.stageVariables : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tagsAll"] = args ? args.tagsAll : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["executionArn"] = undefined /*out*/;
            resourceInputs["invokeUrl"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Apigatewayv2Stage.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Apigatewayv2Stage resources.
 */
export interface Apigatewayv2StageState {
    accessLogSettings?: pulumi.Input<inputs.Apigatewayv2StageAccessLogSettings>;
    apiId?: pulumi.Input<string>;
    arn?: pulumi.Input<string>;
    autoDeploy?: pulumi.Input<boolean>;
    clientCertificateId?: pulumi.Input<string>;
    defaultRouteSettings?: pulumi.Input<inputs.Apigatewayv2StageDefaultRouteSettings>;
    deploymentId?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    executionArn?: pulumi.Input<string>;
    invokeUrl?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    routeSettings?: pulumi.Input<pulumi.Input<inputs.Apigatewayv2StageRouteSetting>[]>;
    stageVariables?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The set of arguments for constructing a Apigatewayv2Stage resource.
 */
export interface Apigatewayv2StageArgs {
    accessLogSettings?: pulumi.Input<inputs.Apigatewayv2StageAccessLogSettings>;
    apiId: pulumi.Input<string>;
    autoDeploy?: pulumi.Input<boolean>;
    clientCertificateId?: pulumi.Input<string>;
    defaultRouteSettings?: pulumi.Input<inputs.Apigatewayv2StageDefaultRouteSettings>;
    deploymentId?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    routeSettings?: pulumi.Input<pulumi.Input<inputs.Apigatewayv2StageRouteSetting>[]>;
    stageVariables?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
