// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class IotSoftwarePackageVersion extends pulumi.CustomResource {
    /**
     * Get an existing IotSoftwarePackageVersion resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IotSoftwarePackageVersionState, opts?: pulumi.CustomResourceOptions): IotSoftwarePackageVersion {
        return new IotSoftwarePackageVersion(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/iotSoftwarePackageVersion:IotSoftwarePackageVersion';

    /**
     * Returns true if the given object is an instance of IotSoftwarePackageVersion.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IotSoftwarePackageVersion {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IotSoftwarePackageVersion.__pulumiType;
    }

    public readonly attributes!: pulumi.Output<{[key: string]: string}>;
    public readonly description!: pulumi.Output<string>;
    public /*out*/ readonly errorReason!: pulumi.Output<string>;
    public readonly packageName!: pulumi.Output<string>;
    public /*out*/ readonly packageVersionArn!: pulumi.Output<string>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    public readonly tags!: pulumi.Output<outputs.IotSoftwarePackageVersionTag[]>;
    public readonly versionName!: pulumi.Output<string>;

    /**
     * Create a IotSoftwarePackageVersion resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IotSoftwarePackageVersionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IotSoftwarePackageVersionArgs | IotSoftwarePackageVersionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IotSoftwarePackageVersionState | undefined;
            resourceInputs["attributes"] = state ? state.attributes : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["errorReason"] = state ? state.errorReason : undefined;
            resourceInputs["packageName"] = state ? state.packageName : undefined;
            resourceInputs["packageVersionArn"] = state ? state.packageVersionArn : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["versionName"] = state ? state.versionName : undefined;
        } else {
            const args = argsOrState as IotSoftwarePackageVersionArgs | undefined;
            if ((!args || args.packageName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'packageName'");
            }
            resourceInputs["attributes"] = args ? args.attributes : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["packageName"] = args ? args.packageName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["versionName"] = args ? args.versionName : undefined;
            resourceInputs["errorReason"] = undefined /*out*/;
            resourceInputs["packageVersionArn"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IotSoftwarePackageVersion.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IotSoftwarePackageVersion resources.
 */
export interface IotSoftwarePackageVersionState {
    attributes?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    description?: pulumi.Input<string>;
    errorReason?: pulumi.Input<string>;
    packageName?: pulumi.Input<string>;
    packageVersionArn?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.IotSoftwarePackageVersionTag>[]>;
    versionName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IotSoftwarePackageVersion resource.
 */
export interface IotSoftwarePackageVersionArgs {
    attributes?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    description?: pulumi.Input<string>;
    packageName: pulumi.Input<string>;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.IotSoftwarePackageVersionTag>[]>;
    versionName?: pulumi.Input<string>;
}
