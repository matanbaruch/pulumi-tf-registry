// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ComputeMachineImage extends pulumi.CustomResource {
    /**
     * Get an existing ComputeMachineImage resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ComputeMachineImageState, opts?: pulumi.CustomResourceOptions): ComputeMachineImage {
        return new ComputeMachineImage(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'opc:index/computeMachineImage:ComputeMachineImage';

    /**
     * Returns true if the given object is an instance of ComputeMachineImage.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ComputeMachineImage {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ComputeMachineImage.__pulumiType;
    }

    public readonly account!: pulumi.Output<string>;
    public readonly attributes!: pulumi.Output<string | undefined>;
    public readonly description!: pulumi.Output<string | undefined>;
    public /*out*/ readonly errorReason!: pulumi.Output<string>;
    public readonly file!: pulumi.Output<string>;
    public /*out*/ readonly hypervisor!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly imageFormat!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly noUpload!: pulumi.Output<boolean>;
    public /*out*/ readonly platform!: pulumi.Output<string>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public /*out*/ readonly uri!: pulumi.Output<string>;

    /**
     * Create a ComputeMachineImage resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ComputeMachineImageArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ComputeMachineImageArgs | ComputeMachineImageState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ComputeMachineImageState | undefined;
            resourceInputs["account"] = state ? state.account : undefined;
            resourceInputs["attributes"] = state ? state.attributes : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["errorReason"] = state ? state.errorReason : undefined;
            resourceInputs["file"] = state ? state.file : undefined;
            resourceInputs["hypervisor"] = state ? state.hypervisor : undefined;
            resourceInputs["imageFormat"] = state ? state.imageFormat : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["noUpload"] = state ? state.noUpload : undefined;
            resourceInputs["platform"] = state ? state.platform : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["uri"] = state ? state.uri : undefined;
        } else {
            const args = argsOrState as ComputeMachineImageArgs | undefined;
            if ((!args || args.account === undefined) && !opts.urn) {
                throw new Error("Missing required property 'account'");
            }
            if ((!args || args.file === undefined) && !opts.urn) {
                throw new Error("Missing required property 'file'");
            }
            resourceInputs["account"] = args ? args.account : undefined;
            resourceInputs["attributes"] = args ? args.attributes : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["file"] = args ? args.file : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["errorReason"] = undefined /*out*/;
            resourceInputs["hypervisor"] = undefined /*out*/;
            resourceInputs["imageFormat"] = undefined /*out*/;
            resourceInputs["noUpload"] = undefined /*out*/;
            resourceInputs["platform"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["uri"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ComputeMachineImage.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ComputeMachineImage resources.
 */
export interface ComputeMachineImageState {
    account?: pulumi.Input<string>;
    attributes?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    errorReason?: pulumi.Input<string>;
    file?: pulumi.Input<string>;
    hypervisor?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    imageFormat?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    noUpload?: pulumi.Input<boolean>;
    platform?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    uri?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ComputeMachineImage resource.
 */
export interface ComputeMachineImageArgs {
    account: pulumi.Input<string>;
    attributes?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    file: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}
