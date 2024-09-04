// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Marketplace extends pulumi.CustomResource {
    /**
     * Get an existing Marketplace resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MarketplaceState, opts?: pulumi.CustomResourceOptions): Marketplace {
        return new Marketplace(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'opennebula:index/marketplace:Marketplace';

    /**
     * Returns true if the given object is an instance of Marketplace.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Marketplace {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Marketplace.__pulumiType;
    }

    /**
     * Default tags defined in the provider configuration
     */
    public /*out*/ readonly defaultTags!: pulumi.Output<{[key: string]: string}>;
    /**
     * Description of the marketplace
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Allow to enable or disable the market place
     */
    public readonly disabled!: pulumi.Output<boolean | undefined>;
    public readonly dockerhub!: pulumi.Output<boolean | undefined>;
    /**
     * ID of the group that will own the marketplace
     */
    public /*out*/ readonly gid!: pulumi.Output<number>;
    /**
     * Name of the group that will own the marketplace
     */
    public /*out*/ readonly gname!: pulumi.Output<string>;
    public readonly https!: pulumi.Output<outputs.MarketplaceHttp[] | undefined>;
    public readonly lxcs!: pulumi.Output<outputs.MarketplaceLxc[] | undefined>;
    /**
     * Name of the marketplace
     */
    public readonly name!: pulumi.Output<string>;
    public readonly ones!: pulumi.Output<outputs.MarketplaceOne[] | undefined>;
    /**
     * Permissions for the marketplace (in Unix format, owner-group-other, use-manage-admin)
     */
    public readonly permissions!: pulumi.Output<string>;
    public readonly s3s!: pulumi.Output<outputs.MarketplaceS3[] | undefined>;
    /**
     * Add custom tags to the resource
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Result of the applied default_tags and resource tags
     */
    public /*out*/ readonly tagsAll!: pulumi.Output<{[key: string]: string}>;
    /**
     * Add custom section to the resource
     */
    public readonly templateSections!: pulumi.Output<outputs.MarketplaceTemplateSection[] | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.MarketplaceTimeouts | undefined>;
    public readonly turnkeys!: pulumi.Output<outputs.MarketplaceTurnkey[] | undefined>;
    /**
     * ID of the user that will own the marketplace
     */
    public /*out*/ readonly uid!: pulumi.Output<number>;
    /**
     * Name of the user that will own the marketplace
     */
    public /*out*/ readonly uname!: pulumi.Output<string>;

    /**
     * Create a Marketplace resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: MarketplaceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MarketplaceArgs | MarketplaceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MarketplaceState | undefined;
            resourceInputs["defaultTags"] = state ? state.defaultTags : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["dockerhub"] = state ? state.dockerhub : undefined;
            resourceInputs["gid"] = state ? state.gid : undefined;
            resourceInputs["gname"] = state ? state.gname : undefined;
            resourceInputs["https"] = state ? state.https : undefined;
            resourceInputs["lxcs"] = state ? state.lxcs : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["ones"] = state ? state.ones : undefined;
            resourceInputs["permissions"] = state ? state.permissions : undefined;
            resourceInputs["s3s"] = state ? state.s3s : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
            resourceInputs["templateSections"] = state ? state.templateSections : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["turnkeys"] = state ? state.turnkeys : undefined;
            resourceInputs["uid"] = state ? state.uid : undefined;
            resourceInputs["uname"] = state ? state.uname : undefined;
        } else {
            const args = argsOrState as MarketplaceArgs | undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["dockerhub"] = args ? args.dockerhub : undefined;
            resourceInputs["https"] = args ? args.https : undefined;
            resourceInputs["lxcs"] = args ? args.lxcs : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["ones"] = args ? args.ones : undefined;
            resourceInputs["permissions"] = args ? args.permissions : undefined;
            resourceInputs["s3s"] = args ? args.s3s : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["templateSections"] = args ? args.templateSections : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["turnkeys"] = args ? args.turnkeys : undefined;
            resourceInputs["defaultTags"] = undefined /*out*/;
            resourceInputs["gid"] = undefined /*out*/;
            resourceInputs["gname"] = undefined /*out*/;
            resourceInputs["tagsAll"] = undefined /*out*/;
            resourceInputs["uid"] = undefined /*out*/;
            resourceInputs["uname"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Marketplace.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Marketplace resources.
 */
export interface MarketplaceState {
    /**
     * Default tags defined in the provider configuration
     */
    defaultTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Description of the marketplace
     */
    description?: pulumi.Input<string>;
    /**
     * Allow to enable or disable the market place
     */
    disabled?: pulumi.Input<boolean>;
    dockerhub?: pulumi.Input<boolean>;
    /**
     * ID of the group that will own the marketplace
     */
    gid?: pulumi.Input<number>;
    /**
     * Name of the group that will own the marketplace
     */
    gname?: pulumi.Input<string>;
    https?: pulumi.Input<pulumi.Input<inputs.MarketplaceHttp>[]>;
    lxcs?: pulumi.Input<pulumi.Input<inputs.MarketplaceLxc>[]>;
    /**
     * Name of the marketplace
     */
    name?: pulumi.Input<string>;
    ones?: pulumi.Input<pulumi.Input<inputs.MarketplaceOne>[]>;
    /**
     * Permissions for the marketplace (in Unix format, owner-group-other, use-manage-admin)
     */
    permissions?: pulumi.Input<string>;
    s3s?: pulumi.Input<pulumi.Input<inputs.MarketplaceS3>[]>;
    /**
     * Add custom tags to the resource
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Result of the applied default_tags and resource tags
     */
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Add custom section to the resource
     */
    templateSections?: pulumi.Input<pulumi.Input<inputs.MarketplaceTemplateSection>[]>;
    timeouts?: pulumi.Input<inputs.MarketplaceTimeouts>;
    turnkeys?: pulumi.Input<pulumi.Input<inputs.MarketplaceTurnkey>[]>;
    /**
     * ID of the user that will own the marketplace
     */
    uid?: pulumi.Input<number>;
    /**
     * Name of the user that will own the marketplace
     */
    uname?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Marketplace resource.
 */
export interface MarketplaceArgs {
    /**
     * Description of the marketplace
     */
    description?: pulumi.Input<string>;
    /**
     * Allow to enable or disable the market place
     */
    disabled?: pulumi.Input<boolean>;
    dockerhub?: pulumi.Input<boolean>;
    https?: pulumi.Input<pulumi.Input<inputs.MarketplaceHttp>[]>;
    lxcs?: pulumi.Input<pulumi.Input<inputs.MarketplaceLxc>[]>;
    /**
     * Name of the marketplace
     */
    name?: pulumi.Input<string>;
    ones?: pulumi.Input<pulumi.Input<inputs.MarketplaceOne>[]>;
    /**
     * Permissions for the marketplace (in Unix format, owner-group-other, use-manage-admin)
     */
    permissions?: pulumi.Input<string>;
    s3s?: pulumi.Input<pulumi.Input<inputs.MarketplaceS3>[]>;
    /**
     * Add custom tags to the resource
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Add custom section to the resource
     */
    templateSections?: pulumi.Input<pulumi.Input<inputs.MarketplaceTemplateSection>[]>;
    timeouts?: pulumi.Input<inputs.MarketplaceTimeouts>;
    turnkeys?: pulumi.Input<pulumi.Input<inputs.MarketplaceTurnkey>[]>;
}
