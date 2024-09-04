// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class MeInstallationTemplatePartitionScheme extends pulumi.CustomResource {
    /**
     * Get an existing MeInstallationTemplatePartitionScheme resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MeInstallationTemplatePartitionSchemeState, opts?: pulumi.CustomResourceOptions): MeInstallationTemplatePartitionScheme {
        return new MeInstallationTemplatePartitionScheme(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ovh:index/meInstallationTemplatePartitionScheme:MeInstallationTemplatePartitionScheme';

    /**
     * Returns true if the given object is an instance of MeInstallationTemplatePartitionScheme.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MeInstallationTemplatePartitionScheme {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MeInstallationTemplatePartitionScheme.__pulumiType;
    }

    /**
     * name of this partitioning scheme
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * on a reinstall, if a partitioning scheme is not specified, the one with the higher priority will be used by default,
     * among all the compatible partitioning schemes (given the underlying hardware specifications)
     */
    public readonly priority!: pulumi.Output<number>;
    /**
     * This template name
     */
    public readonly templateName!: pulumi.Output<string>;

    /**
     * Create a MeInstallationTemplatePartitionScheme resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MeInstallationTemplatePartitionSchemeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MeInstallationTemplatePartitionSchemeArgs | MeInstallationTemplatePartitionSchemeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MeInstallationTemplatePartitionSchemeState | undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["templateName"] = state ? state.templateName : undefined;
        } else {
            const args = argsOrState as MeInstallationTemplatePartitionSchemeArgs | undefined;
            if ((!args || args.priority === undefined) && !opts.urn) {
                throw new Error("Missing required property 'priority'");
            }
            if ((!args || args.templateName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'templateName'");
            }
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["templateName"] = args ? args.templateName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MeInstallationTemplatePartitionScheme.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MeInstallationTemplatePartitionScheme resources.
 */
export interface MeInstallationTemplatePartitionSchemeState {
    /**
     * name of this partitioning scheme
     */
    name?: pulumi.Input<string>;
    /**
     * on a reinstall, if a partitioning scheme is not specified, the one with the higher priority will be used by default,
     * among all the compatible partitioning schemes (given the underlying hardware specifications)
     */
    priority?: pulumi.Input<number>;
    /**
     * This template name
     */
    templateName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a MeInstallationTemplatePartitionScheme resource.
 */
export interface MeInstallationTemplatePartitionSchemeArgs {
    /**
     * name of this partitioning scheme
     */
    name?: pulumi.Input<string>;
    /**
     * on a reinstall, if a partitioning scheme is not specified, the one with the higher priority will be used by default,
     * among all the compatible partitioning schemes (given the underlying hardware specifications)
     */
    priority: pulumi.Input<number>;
    /**
     * This template name
     */
    templateName: pulumi.Input<string>;
}
