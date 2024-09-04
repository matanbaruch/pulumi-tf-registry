// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CustomImage extends pulumi.CustomResource {
    /**
     * Get an existing CustomImage resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CustomImageState, opts?: pulumi.CustomResourceOptions): CustomImage {
        return new CustomImage(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'cloudscale:index/customImage:CustomImage';

    /**
     * Returns true if the given object is an instance of CustomImage.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CustomImage {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CustomImage.__pulumiType;
    }

    public /*out*/ readonly checksums!: pulumi.Output<{[key: string]: string}>;
    public readonly firmwareType!: pulumi.Output<string>;
    public /*out*/ readonly href!: pulumi.Output<string>;
    public /*out*/ readonly importHref!: pulumi.Output<string>;
    public readonly importSourceFormat!: pulumi.Output<string | undefined>;
    public /*out*/ readonly importStatus!: pulumi.Output<string>;
    public readonly importUrl!: pulumi.Output<string>;
    public /*out*/ readonly importUuid!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly sizeGb!: pulumi.Output<number>;
    public readonly slug!: pulumi.Output<string | undefined>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.CustomImageTimeouts | undefined>;
    public readonly userDataHandling!: pulumi.Output<string>;
    public readonly zoneSlugs!: pulumi.Output<string[]>;

    /**
     * Create a CustomImage resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CustomImageArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CustomImageArgs | CustomImageState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CustomImageState | undefined;
            resourceInputs["checksums"] = state ? state.checksums : undefined;
            resourceInputs["firmwareType"] = state ? state.firmwareType : undefined;
            resourceInputs["href"] = state ? state.href : undefined;
            resourceInputs["importHref"] = state ? state.importHref : undefined;
            resourceInputs["importSourceFormat"] = state ? state.importSourceFormat : undefined;
            resourceInputs["importStatus"] = state ? state.importStatus : undefined;
            resourceInputs["importUrl"] = state ? state.importUrl : undefined;
            resourceInputs["importUuid"] = state ? state.importUuid : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["sizeGb"] = state ? state.sizeGb : undefined;
            resourceInputs["slug"] = state ? state.slug : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["userDataHandling"] = state ? state.userDataHandling : undefined;
            resourceInputs["zoneSlugs"] = state ? state.zoneSlugs : undefined;
        } else {
            const args = argsOrState as CustomImageArgs | undefined;
            if ((!args || args.importUrl === undefined) && !opts.urn) {
                throw new Error("Missing required property 'importUrl'");
            }
            if ((!args || args.userDataHandling === undefined) && !opts.urn) {
                throw new Error("Missing required property 'userDataHandling'");
            }
            if ((!args || args.zoneSlugs === undefined) && !opts.urn) {
                throw new Error("Missing required property 'zoneSlugs'");
            }
            resourceInputs["firmwareType"] = args ? args.firmwareType : undefined;
            resourceInputs["importSourceFormat"] = args ? args.importSourceFormat : undefined;
            resourceInputs["importUrl"] = args ? args.importUrl : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["slug"] = args ? args.slug : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["userDataHandling"] = args ? args.userDataHandling : undefined;
            resourceInputs["zoneSlugs"] = args ? args.zoneSlugs : undefined;
            resourceInputs["checksums"] = undefined /*out*/;
            resourceInputs["href"] = undefined /*out*/;
            resourceInputs["importHref"] = undefined /*out*/;
            resourceInputs["importStatus"] = undefined /*out*/;
            resourceInputs["importUuid"] = undefined /*out*/;
            resourceInputs["sizeGb"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CustomImage.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CustomImage resources.
 */
export interface CustomImageState {
    checksums?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    firmwareType?: pulumi.Input<string>;
    href?: pulumi.Input<string>;
    importHref?: pulumi.Input<string>;
    importSourceFormat?: pulumi.Input<string>;
    importStatus?: pulumi.Input<string>;
    importUrl?: pulumi.Input<string>;
    importUuid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    sizeGb?: pulumi.Input<number>;
    slug?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.CustomImageTimeouts>;
    userDataHandling?: pulumi.Input<string>;
    zoneSlugs?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a CustomImage resource.
 */
export interface CustomImageArgs {
    firmwareType?: pulumi.Input<string>;
    importSourceFormat?: pulumi.Input<string>;
    importUrl: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    slug?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.CustomImageTimeouts>;
    userDataHandling: pulumi.Input<string>;
    zoneSlugs: pulumi.Input<pulumi.Input<string>[]>;
}
