// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class UploadErrorPage extends pulumi.CustomResource {
    /**
     * Get an existing UploadErrorPage resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UploadErrorPageState, opts?: pulumi.CustomResourceOptions): UploadErrorPage {
        return new UploadErrorPage(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortiadc:index/uploadErrorPage:UploadErrorPage';

    /**
     * Returns true if the given object is an instance of UploadErrorPage.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is UploadErrorPage {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === UploadErrorPage.__pulumiType;
    }

    public readonly errorpagefile!: pulumi.Output<string>;
    public readonly mkey!: pulumi.Output<string>;
    public readonly update!: pulumi.Output<string | undefined>;
    public readonly vdom!: pulumi.Output<string | undefined>;
    public readonly vpath!: pulumi.Output<string>;

    /**
     * Create a UploadErrorPage resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: UploadErrorPageArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: UploadErrorPageArgs | UploadErrorPageState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as UploadErrorPageState | undefined;
            resourceInputs["errorpagefile"] = state ? state.errorpagefile : undefined;
            resourceInputs["mkey"] = state ? state.mkey : undefined;
            resourceInputs["update"] = state ? state.update : undefined;
            resourceInputs["vdom"] = state ? state.vdom : undefined;
            resourceInputs["vpath"] = state ? state.vpath : undefined;
        } else {
            const args = argsOrState as UploadErrorPageArgs | undefined;
            if ((!args || args.errorpagefile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'errorpagefile'");
            }
            if ((!args || args.mkey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mkey'");
            }
            resourceInputs["errorpagefile"] = args ? args.errorpagefile : undefined;
            resourceInputs["mkey"] = args ? args.mkey : undefined;
            resourceInputs["update"] = args ? args.update : undefined;
            resourceInputs["vdom"] = args ? args.vdom : undefined;
            resourceInputs["vpath"] = args ? args.vpath : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(UploadErrorPage.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering UploadErrorPage resources.
 */
export interface UploadErrorPageState {
    errorpagefile?: pulumi.Input<string>;
    mkey?: pulumi.Input<string>;
    update?: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
    vpath?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a UploadErrorPage resource.
 */
export interface UploadErrorPageArgs {
    errorpagefile: pulumi.Input<string>;
    mkey: pulumi.Input<string>;
    update?: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
    vpath?: pulumi.Input<string>;
}
