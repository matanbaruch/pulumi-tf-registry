// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class MigrationImage extends pulumi.CustomResource {
    /**
     * Get an existing MigrationImage resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MigrationImageState, opts?: pulumi.CustomResourceOptions): MigrationImage {
        return new MigrationImage(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'samsungcloudplatform:index/migrationImage:MigrationImage';

    /**
     * Returns true if the given object is an instance of MigrationImage.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MigrationImage {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MigrationImage.__pulumiType;
    }

    /**
     * access key for ova
     */
    public readonly accessKey!: pulumi.Output<string>;
    /**
     * Availability Zone Name
     */
    public readonly azName!: pulumi.Output<string | undefined>;
    public /*out*/ readonly createdBy!: pulumi.Output<string>;
    public /*out*/ readonly createdDt!: pulumi.Output<string>;
    public /*out*/ readonly icon!: pulumi.Output<{[key: string]: string}>;
    /**
     * Image Description
     */
    public readonly imageDescription!: pulumi.Output<string>;
    public /*out*/ readonly imageId!: pulumi.Output<string>;
    /**
     * Migration Image Name
     */
    public readonly imageName!: pulumi.Output<string>;
    /**
     * Image state (ACTIVE)
     */
    public /*out*/ readonly imageState!: pulumi.Output<string>;
    /**
     * Image type (STANDARD, CUSTOM, MIGRATION)
     */
    public /*out*/ readonly imageType!: pulumi.Output<string>;
    public /*out*/ readonly modifiedBy!: pulumi.Output<string>;
    public /*out*/ readonly modifiedDt!: pulumi.Output<string>;
    public /*out*/ readonly originImageName!: pulumi.Output<string>;
    /**
     * Original Image Id
     */
    public readonly originalImageId!: pulumi.Output<string>;
    /**
     * OS type (Windows, Ubuntu, ..)
     */
    public /*out*/ readonly osType!: pulumi.Output<string>;
    /**
     * OS User Id
     */
    public readonly osUserId!: pulumi.Output<string>;
    /**
     * Os User Password
     */
    public readonly osUserPassword!: pulumi.Output<string>;
    /**
     * Ova url
     */
    public readonly ovaUrl!: pulumi.Output<string>;
    public /*out*/ readonly productGroupId!: pulumi.Output<string>;
    public /*out*/ readonly products!: pulumi.Output<outputs.MigrationImageProduct[]>;
    public /*out*/ readonly properties!: pulumi.Output<{[key: string]: string}>;
    /**
     * secret key for ova
     */
    public readonly secretKey!: pulumi.Output<string>;
    public readonly serviceZoneId!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;

    /**
     * Create a MigrationImage resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MigrationImageArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MigrationImageArgs | MigrationImageState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MigrationImageState | undefined;
            resourceInputs["accessKey"] = state ? state.accessKey : undefined;
            resourceInputs["azName"] = state ? state.azName : undefined;
            resourceInputs["createdBy"] = state ? state.createdBy : undefined;
            resourceInputs["createdDt"] = state ? state.createdDt : undefined;
            resourceInputs["icon"] = state ? state.icon : undefined;
            resourceInputs["imageDescription"] = state ? state.imageDescription : undefined;
            resourceInputs["imageId"] = state ? state.imageId : undefined;
            resourceInputs["imageName"] = state ? state.imageName : undefined;
            resourceInputs["imageState"] = state ? state.imageState : undefined;
            resourceInputs["imageType"] = state ? state.imageType : undefined;
            resourceInputs["modifiedBy"] = state ? state.modifiedBy : undefined;
            resourceInputs["modifiedDt"] = state ? state.modifiedDt : undefined;
            resourceInputs["originImageName"] = state ? state.originImageName : undefined;
            resourceInputs["originalImageId"] = state ? state.originalImageId : undefined;
            resourceInputs["osType"] = state ? state.osType : undefined;
            resourceInputs["osUserId"] = state ? state.osUserId : undefined;
            resourceInputs["osUserPassword"] = state ? state.osUserPassword : undefined;
            resourceInputs["ovaUrl"] = state ? state.ovaUrl : undefined;
            resourceInputs["productGroupId"] = state ? state.productGroupId : undefined;
            resourceInputs["products"] = state ? state.products : undefined;
            resourceInputs["properties"] = state ? state.properties : undefined;
            resourceInputs["secretKey"] = state ? state.secretKey : undefined;
            resourceInputs["serviceZoneId"] = state ? state.serviceZoneId : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as MigrationImageArgs | undefined;
            if ((!args || args.accessKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accessKey'");
            }
            if ((!args || args.imageDescription === undefined) && !opts.urn) {
                throw new Error("Missing required property 'imageDescription'");
            }
            if ((!args || args.imageName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'imageName'");
            }
            if ((!args || args.originalImageId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'originalImageId'");
            }
            if ((!args || args.osUserId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'osUserId'");
            }
            if ((!args || args.osUserPassword === undefined) && !opts.urn) {
                throw new Error("Missing required property 'osUserPassword'");
            }
            if ((!args || args.ovaUrl === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ovaUrl'");
            }
            if ((!args || args.secretKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'secretKey'");
            }
            if ((!args || args.serviceZoneId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceZoneId'");
            }
            resourceInputs["accessKey"] = args ? args.accessKey : undefined;
            resourceInputs["azName"] = args ? args.azName : undefined;
            resourceInputs["imageDescription"] = args ? args.imageDescription : undefined;
            resourceInputs["imageName"] = args ? args.imageName : undefined;
            resourceInputs["originalImageId"] = args ? args.originalImageId : undefined;
            resourceInputs["osUserId"] = args ? args.osUserId : undefined;
            resourceInputs["osUserPassword"] = args ? args.osUserPassword : undefined;
            resourceInputs["ovaUrl"] = args ? args.ovaUrl : undefined;
            resourceInputs["secretKey"] = args ? args.secretKey : undefined;
            resourceInputs["serviceZoneId"] = args ? args.serviceZoneId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["createdBy"] = undefined /*out*/;
            resourceInputs["createdDt"] = undefined /*out*/;
            resourceInputs["icon"] = undefined /*out*/;
            resourceInputs["imageId"] = undefined /*out*/;
            resourceInputs["imageState"] = undefined /*out*/;
            resourceInputs["imageType"] = undefined /*out*/;
            resourceInputs["modifiedBy"] = undefined /*out*/;
            resourceInputs["modifiedDt"] = undefined /*out*/;
            resourceInputs["originImageName"] = undefined /*out*/;
            resourceInputs["osType"] = undefined /*out*/;
            resourceInputs["productGroupId"] = undefined /*out*/;
            resourceInputs["products"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MigrationImage.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MigrationImage resources.
 */
export interface MigrationImageState {
    /**
     * access key for ova
     */
    accessKey?: pulumi.Input<string>;
    /**
     * Availability Zone Name
     */
    azName?: pulumi.Input<string>;
    createdBy?: pulumi.Input<string>;
    createdDt?: pulumi.Input<string>;
    icon?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Image Description
     */
    imageDescription?: pulumi.Input<string>;
    imageId?: pulumi.Input<string>;
    /**
     * Migration Image Name
     */
    imageName?: pulumi.Input<string>;
    /**
     * Image state (ACTIVE)
     */
    imageState?: pulumi.Input<string>;
    /**
     * Image type (STANDARD, CUSTOM, MIGRATION)
     */
    imageType?: pulumi.Input<string>;
    modifiedBy?: pulumi.Input<string>;
    modifiedDt?: pulumi.Input<string>;
    originImageName?: pulumi.Input<string>;
    /**
     * Original Image Id
     */
    originalImageId?: pulumi.Input<string>;
    /**
     * OS type (Windows, Ubuntu, ..)
     */
    osType?: pulumi.Input<string>;
    /**
     * OS User Id
     */
    osUserId?: pulumi.Input<string>;
    /**
     * Os User Password
     */
    osUserPassword?: pulumi.Input<string>;
    /**
     * Ova url
     */
    ovaUrl?: pulumi.Input<string>;
    productGroupId?: pulumi.Input<string>;
    products?: pulumi.Input<pulumi.Input<inputs.MigrationImageProduct>[]>;
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * secret key for ova
     */
    secretKey?: pulumi.Input<string>;
    serviceZoneId?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The set of arguments for constructing a MigrationImage resource.
 */
export interface MigrationImageArgs {
    /**
     * access key for ova
     */
    accessKey: pulumi.Input<string>;
    /**
     * Availability Zone Name
     */
    azName?: pulumi.Input<string>;
    /**
     * Image Description
     */
    imageDescription: pulumi.Input<string>;
    /**
     * Migration Image Name
     */
    imageName: pulumi.Input<string>;
    /**
     * Original Image Id
     */
    originalImageId: pulumi.Input<string>;
    /**
     * OS User Id
     */
    osUserId: pulumi.Input<string>;
    /**
     * Os User Password
     */
    osUserPassword: pulumi.Input<string>;
    /**
     * Ova url
     */
    ovaUrl: pulumi.Input<string>;
    /**
     * secret key for ova
     */
    secretKey: pulumi.Input<string>;
    serviceZoneId: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
