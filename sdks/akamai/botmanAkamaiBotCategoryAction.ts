// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class BotmanAkamaiBotCategoryAction extends pulumi.CustomResource {
    /**
     * Get an existing BotmanAkamaiBotCategoryAction resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BotmanAkamaiBotCategoryActionState, opts?: pulumi.CustomResourceOptions): BotmanAkamaiBotCategoryAction {
        return new BotmanAkamaiBotCategoryAction(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'akamai:index/botmanAkamaiBotCategoryAction:BotmanAkamaiBotCategoryAction';

    /**
     * Returns true if the given object is an instance of BotmanAkamaiBotCategoryAction.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BotmanAkamaiBotCategoryAction {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BotmanAkamaiBotCategoryAction.__pulumiType;
    }

    public readonly akamaiBotCategoryAction!: pulumi.Output<string>;
    public readonly categoryId!: pulumi.Output<string>;
    public readonly configId!: pulumi.Output<number>;
    public readonly securityPolicyId!: pulumi.Output<string>;

    /**
     * Create a BotmanAkamaiBotCategoryAction resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BotmanAkamaiBotCategoryActionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BotmanAkamaiBotCategoryActionArgs | BotmanAkamaiBotCategoryActionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BotmanAkamaiBotCategoryActionState | undefined;
            resourceInputs["akamaiBotCategoryAction"] = state ? state.akamaiBotCategoryAction : undefined;
            resourceInputs["categoryId"] = state ? state.categoryId : undefined;
            resourceInputs["configId"] = state ? state.configId : undefined;
            resourceInputs["securityPolicyId"] = state ? state.securityPolicyId : undefined;
        } else {
            const args = argsOrState as BotmanAkamaiBotCategoryActionArgs | undefined;
            if ((!args || args.akamaiBotCategoryAction === undefined) && !opts.urn) {
                throw new Error("Missing required property 'akamaiBotCategoryAction'");
            }
            if ((!args || args.categoryId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'categoryId'");
            }
            if ((!args || args.configId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'configId'");
            }
            if ((!args || args.securityPolicyId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'securityPolicyId'");
            }
            resourceInputs["akamaiBotCategoryAction"] = args ? args.akamaiBotCategoryAction : undefined;
            resourceInputs["categoryId"] = args ? args.categoryId : undefined;
            resourceInputs["configId"] = args ? args.configId : undefined;
            resourceInputs["securityPolicyId"] = args ? args.securityPolicyId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(BotmanAkamaiBotCategoryAction.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering BotmanAkamaiBotCategoryAction resources.
 */
export interface BotmanAkamaiBotCategoryActionState {
    akamaiBotCategoryAction?: pulumi.Input<string>;
    categoryId?: pulumi.Input<string>;
    configId?: pulumi.Input<number>;
    securityPolicyId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a BotmanAkamaiBotCategoryAction resource.
 */
export interface BotmanAkamaiBotCategoryActionArgs {
    akamaiBotCategoryAction: pulumi.Input<string>;
    categoryId: pulumi.Input<string>;
    configId: pulumi.Input<number>;
    securityPolicyId: pulumi.Input<string>;
}
