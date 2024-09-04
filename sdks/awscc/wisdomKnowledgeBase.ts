// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class WisdomKnowledgeBase extends pulumi.CustomResource {
    /**
     * Get an existing WisdomKnowledgeBase resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WisdomKnowledgeBaseState, opts?: pulumi.CustomResourceOptions): WisdomKnowledgeBase {
        return new WisdomKnowledgeBase(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/wisdomKnowledgeBase:WisdomKnowledgeBase';

    /**
     * Returns true if the given object is an instance of WisdomKnowledgeBase.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WisdomKnowledgeBase {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WisdomKnowledgeBase.__pulumiType;
    }

    public readonly description!: pulumi.Output<string>;
    public /*out*/ readonly knowledgeBaseArn!: pulumi.Output<string>;
    public /*out*/ readonly knowledgeBaseId!: pulumi.Output<string>;
    public readonly knowledgeBaseType!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly renderingConfiguration!: pulumi.Output<outputs.WisdomKnowledgeBaseRenderingConfiguration>;
    public readonly serverSideEncryptionConfiguration!: pulumi.Output<outputs.WisdomKnowledgeBaseServerSideEncryptionConfiguration>;
    public readonly sourceConfiguration!: pulumi.Output<outputs.WisdomKnowledgeBaseSourceConfiguration>;
    public readonly tags!: pulumi.Output<outputs.WisdomKnowledgeBaseTag[]>;

    /**
     * Create a WisdomKnowledgeBase resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WisdomKnowledgeBaseArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WisdomKnowledgeBaseArgs | WisdomKnowledgeBaseState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WisdomKnowledgeBaseState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["knowledgeBaseArn"] = state ? state.knowledgeBaseArn : undefined;
            resourceInputs["knowledgeBaseId"] = state ? state.knowledgeBaseId : undefined;
            resourceInputs["knowledgeBaseType"] = state ? state.knowledgeBaseType : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["renderingConfiguration"] = state ? state.renderingConfiguration : undefined;
            resourceInputs["serverSideEncryptionConfiguration"] = state ? state.serverSideEncryptionConfiguration : undefined;
            resourceInputs["sourceConfiguration"] = state ? state.sourceConfiguration : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as WisdomKnowledgeBaseArgs | undefined;
            if ((!args || args.knowledgeBaseType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'knowledgeBaseType'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["knowledgeBaseType"] = args ? args.knowledgeBaseType : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["renderingConfiguration"] = args ? args.renderingConfiguration : undefined;
            resourceInputs["serverSideEncryptionConfiguration"] = args ? args.serverSideEncryptionConfiguration : undefined;
            resourceInputs["sourceConfiguration"] = args ? args.sourceConfiguration : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["knowledgeBaseArn"] = undefined /*out*/;
            resourceInputs["knowledgeBaseId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(WisdomKnowledgeBase.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering WisdomKnowledgeBase resources.
 */
export interface WisdomKnowledgeBaseState {
    description?: pulumi.Input<string>;
    knowledgeBaseArn?: pulumi.Input<string>;
    knowledgeBaseId?: pulumi.Input<string>;
    knowledgeBaseType?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    renderingConfiguration?: pulumi.Input<inputs.WisdomKnowledgeBaseRenderingConfiguration>;
    serverSideEncryptionConfiguration?: pulumi.Input<inputs.WisdomKnowledgeBaseServerSideEncryptionConfiguration>;
    sourceConfiguration?: pulumi.Input<inputs.WisdomKnowledgeBaseSourceConfiguration>;
    tags?: pulumi.Input<pulumi.Input<inputs.WisdomKnowledgeBaseTag>[]>;
}

/**
 * The set of arguments for constructing a WisdomKnowledgeBase resource.
 */
export interface WisdomKnowledgeBaseArgs {
    description?: pulumi.Input<string>;
    knowledgeBaseType: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    renderingConfiguration?: pulumi.Input<inputs.WisdomKnowledgeBaseRenderingConfiguration>;
    serverSideEncryptionConfiguration?: pulumi.Input<inputs.WisdomKnowledgeBaseServerSideEncryptionConfiguration>;
    sourceConfiguration?: pulumi.Input<inputs.WisdomKnowledgeBaseSourceConfiguration>;
    tags?: pulumi.Input<pulumi.Input<inputs.WisdomKnowledgeBaseTag>[]>;
}
