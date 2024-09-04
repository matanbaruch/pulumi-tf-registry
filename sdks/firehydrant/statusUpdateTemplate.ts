// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class StatusUpdateTemplate extends pulumi.CustomResource {
    /**
     * Get an existing StatusUpdateTemplate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: StatusUpdateTemplateState, opts?: pulumi.CustomResourceOptions): StatusUpdateTemplate {
        return new StatusUpdateTemplate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'firehydrant:index/statusUpdateTemplate:StatusUpdateTemplate';

    /**
     * Returns true if the given object is an instance of StatusUpdateTemplate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is StatusUpdateTemplate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === StatusUpdateTemplate.__pulumiType;
    }

    public readonly body!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;

    /**
     * Create a StatusUpdateTemplate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StatusUpdateTemplateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: StatusUpdateTemplateArgs | StatusUpdateTemplateState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as StatusUpdateTemplateState | undefined;
            resourceInputs["body"] = state ? state.body : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
        } else {
            const args = argsOrState as StatusUpdateTemplateArgs | undefined;
            if ((!args || args.body === undefined) && !opts.urn) {
                throw new Error("Missing required property 'body'");
            }
            resourceInputs["body"] = args ? args.body : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(StatusUpdateTemplate.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering StatusUpdateTemplate resources.
 */
export interface StatusUpdateTemplateState {
    body?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a StatusUpdateTemplate resource.
 */
export interface StatusUpdateTemplateArgs {
    body: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}
