// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ProtocolTemplateGroup extends pulumi.CustomResource {
    /**
     * Get an existing ProtocolTemplateGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ProtocolTemplateGroupState, opts?: pulumi.CustomResourceOptions): ProtocolTemplateGroup {
        return new ProtocolTemplateGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/protocolTemplateGroup:ProtocolTemplateGroup';

    /**
     * Returns true if the given object is an instance of ProtocolTemplateGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ProtocolTemplateGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ProtocolTemplateGroup.__pulumiType;
    }

    /**
     * Name of the protocol template group.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Service template ID list.
     */
    public readonly templateIds!: pulumi.Output<string[]>;

    /**
     * Create a ProtocolTemplateGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProtocolTemplateGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ProtocolTemplateGroupArgs | ProtocolTemplateGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ProtocolTemplateGroupState | undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["templateIds"] = state ? state.templateIds : undefined;
        } else {
            const args = argsOrState as ProtocolTemplateGroupArgs | undefined;
            if ((!args || args.templateIds === undefined) && !opts.urn) {
                throw new Error("Missing required property 'templateIds'");
            }
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["templateIds"] = args ? args.templateIds : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ProtocolTemplateGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ProtocolTemplateGroup resources.
 */
export interface ProtocolTemplateGroupState {
    /**
     * Name of the protocol template group.
     */
    name?: pulumi.Input<string>;
    /**
     * Service template ID list.
     */
    templateIds?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a ProtocolTemplateGroup resource.
 */
export interface ProtocolTemplateGroupArgs {
    /**
     * Name of the protocol template group.
     */
    name?: pulumi.Input<string>;
    /**
     * Service template ID list.
     */
    templateIds: pulumi.Input<pulumi.Input<string>[]>;
}
