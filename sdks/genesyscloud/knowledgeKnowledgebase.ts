// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class KnowledgeKnowledgebase extends pulumi.CustomResource {
    /**
     * Get an existing KnowledgeKnowledgebase resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: KnowledgeKnowledgebaseState, opts?: pulumi.CustomResourceOptions): KnowledgeKnowledgebase {
        return new KnowledgeKnowledgebase(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'genesyscloud:index/knowledgeKnowledgebase:KnowledgeKnowledgebase';

    /**
     * Returns true if the given object is an instance of KnowledgeKnowledgebase.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is KnowledgeKnowledgebase {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === KnowledgeKnowledgebase.__pulumiType;
    }

    /**
     * Core language for knowledge base in which initial content must be created, language codes [en-US, en-UK, en-AU, de-DE]
     * are supported currently, however the new DX knowledge will support all these language codes
     */
    public readonly coreLanguage!: pulumi.Output<string>;
    /**
     * Knowledge base description
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Knowledge base name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Flag that indicates the knowledge base is published
     */
    public readonly published!: pulumi.Output<boolean>;

    /**
     * Create a KnowledgeKnowledgebase resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KnowledgeKnowledgebaseArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: KnowledgeKnowledgebaseArgs | KnowledgeKnowledgebaseState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as KnowledgeKnowledgebaseState | undefined;
            resourceInputs["coreLanguage"] = state ? state.coreLanguage : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["published"] = state ? state.published : undefined;
        } else {
            const args = argsOrState as KnowledgeKnowledgebaseArgs | undefined;
            if ((!args || args.coreLanguage === undefined) && !opts.urn) {
                throw new Error("Missing required property 'coreLanguage'");
            }
            resourceInputs["coreLanguage"] = args ? args.coreLanguage : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["published"] = args ? args.published : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(KnowledgeKnowledgebase.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering KnowledgeKnowledgebase resources.
 */
export interface KnowledgeKnowledgebaseState {
    /**
     * Core language for knowledge base in which initial content must be created, language codes [en-US, en-UK, en-AU, de-DE]
     * are supported currently, however the new DX knowledge will support all these language codes
     */
    coreLanguage?: pulumi.Input<string>;
    /**
     * Knowledge base description
     */
    description?: pulumi.Input<string>;
    /**
     * Knowledge base name
     */
    name?: pulumi.Input<string>;
    /**
     * Flag that indicates the knowledge base is published
     */
    published?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a KnowledgeKnowledgebase resource.
 */
export interface KnowledgeKnowledgebaseArgs {
    /**
     * Core language for knowledge base in which initial content must be created, language codes [en-US, en-UK, en-AU, de-DE]
     * are supported currently, however the new DX knowledge will support all these language codes
     */
    coreLanguage: pulumi.Input<string>;
    /**
     * Knowledge base description
     */
    description?: pulumi.Input<string>;
    /**
     * Knowledge base name
     */
    name?: pulumi.Input<string>;
    /**
     * Flag that indicates the knowledge base is published
     */
    published?: pulumi.Input<boolean>;
}
