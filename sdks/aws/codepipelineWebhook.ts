// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CodepipelineWebhook extends pulumi.CustomResource {
    /**
     * Get an existing CodepipelineWebhook resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CodepipelineWebhookState, opts?: pulumi.CustomResourceOptions): CodepipelineWebhook {
        return new CodepipelineWebhook(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/codepipelineWebhook:CodepipelineWebhook';

    /**
     * Returns true if the given object is an instance of CodepipelineWebhook.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CodepipelineWebhook {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CodepipelineWebhook.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly authentication!: pulumi.Output<string>;
    public readonly authenticationConfiguration!: pulumi.Output<outputs.CodepipelineWebhookAuthenticationConfiguration | undefined>;
    public readonly filters!: pulumi.Output<outputs.CodepipelineWebhookFilter[]>;
    public readonly name!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tagsAll!: pulumi.Output<{[key: string]: string}>;
    public readonly targetAction!: pulumi.Output<string>;
    public readonly targetPipeline!: pulumi.Output<string>;
    public /*out*/ readonly url!: pulumi.Output<string>;

    /**
     * Create a CodepipelineWebhook resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CodepipelineWebhookArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CodepipelineWebhookArgs | CodepipelineWebhookState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CodepipelineWebhookState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["authentication"] = state ? state.authentication : undefined;
            resourceInputs["authenticationConfiguration"] = state ? state.authenticationConfiguration : undefined;
            resourceInputs["filters"] = state ? state.filters : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
            resourceInputs["targetAction"] = state ? state.targetAction : undefined;
            resourceInputs["targetPipeline"] = state ? state.targetPipeline : undefined;
            resourceInputs["url"] = state ? state.url : undefined;
        } else {
            const args = argsOrState as CodepipelineWebhookArgs | undefined;
            if ((!args || args.authentication === undefined) && !opts.urn) {
                throw new Error("Missing required property 'authentication'");
            }
            if ((!args || args.filters === undefined) && !opts.urn) {
                throw new Error("Missing required property 'filters'");
            }
            if ((!args || args.targetAction === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetAction'");
            }
            if ((!args || args.targetPipeline === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetPipeline'");
            }
            resourceInputs["authentication"] = args ? args.authentication : undefined;
            resourceInputs["authenticationConfiguration"] = args ? args.authenticationConfiguration : undefined;
            resourceInputs["filters"] = args ? args.filters : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tagsAll"] = args ? args.tagsAll : undefined;
            resourceInputs["targetAction"] = args ? args.targetAction : undefined;
            resourceInputs["targetPipeline"] = args ? args.targetPipeline : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["url"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CodepipelineWebhook.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CodepipelineWebhook resources.
 */
export interface CodepipelineWebhookState {
    arn?: pulumi.Input<string>;
    authentication?: pulumi.Input<string>;
    authenticationConfiguration?: pulumi.Input<inputs.CodepipelineWebhookAuthenticationConfiguration>;
    filters?: pulumi.Input<pulumi.Input<inputs.CodepipelineWebhookFilter>[]>;
    name?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    targetAction?: pulumi.Input<string>;
    targetPipeline?: pulumi.Input<string>;
    url?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CodepipelineWebhook resource.
 */
export interface CodepipelineWebhookArgs {
    authentication: pulumi.Input<string>;
    authenticationConfiguration?: pulumi.Input<inputs.CodepipelineWebhookAuthenticationConfiguration>;
    filters: pulumi.Input<pulumi.Input<inputs.CodepipelineWebhookFilter>[]>;
    name?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    targetAction: pulumi.Input<string>;
    targetPipeline: pulumi.Input<string>;
}
