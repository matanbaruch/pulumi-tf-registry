// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ObjectStorageObject extends pulumi.CustomResource {
    /**
     * Get an existing ObjectStorageObject resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectStorageObjectState, opts?: pulumi.CustomResourceOptions): ObjectStorageObject {
        return new ObjectStorageObject(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'multy:index/objectStorageObject:ObjectStorageObject';

    /**
     * Returns true if the given object is an instance of ObjectStorageObject.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectStorageObject {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectStorageObject.__pulumiType;
    }

    /**
     * Access control for the given object. Can be public_read or private. Defaults to private.
     */
    public readonly acl!: pulumi.Output<string>;
    /**
     * AWS-specific ids of the underlying generated resources
     */
    public /*out*/ readonly aws!: pulumi.Output<outputs.ObjectStorageObjectAws>;
    /**
     * Azure-specific ids of the underlying generated resources
     */
    public /*out*/ readonly azure!: pulumi.Output<outputs.ObjectStorageObjectAzure>;
    /**
     * Content of the object
     */
    public readonly contentBase64!: pulumi.Output<string>;
    /**
     * Standard MIME type describing the format of the object data
     */
    public readonly contentType!: pulumi.Output<string | undefined>;
    /**
     * GCP-specific ids of the underlying generated resources
     */
    public /*out*/ readonly gcp!: pulumi.Output<outputs.ObjectStorageObjectGcp>;
    /**
     * Name of object storage object
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Id of object storage
     */
    public readonly objectStorageId!: pulumi.Output<string>;
    /**
     * Statuses of underlying created resources
     */
    public /*out*/ readonly resourceStatus!: pulumi.Output<{[key: string]: string}>;
    /**
     * URL of object
     */
    public /*out*/ readonly url!: pulumi.Output<string>;

    /**
     * Create a ObjectStorageObject resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ObjectStorageObjectArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectStorageObjectArgs | ObjectStorageObjectState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectStorageObjectState | undefined;
            resourceInputs["acl"] = state ? state.acl : undefined;
            resourceInputs["aws"] = state ? state.aws : undefined;
            resourceInputs["azure"] = state ? state.azure : undefined;
            resourceInputs["contentBase64"] = state ? state.contentBase64 : undefined;
            resourceInputs["contentType"] = state ? state.contentType : undefined;
            resourceInputs["gcp"] = state ? state.gcp : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["objectStorageId"] = state ? state.objectStorageId : undefined;
            resourceInputs["resourceStatus"] = state ? state.resourceStatus : undefined;
            resourceInputs["url"] = state ? state.url : undefined;
        } else {
            const args = argsOrState as ObjectStorageObjectArgs | undefined;
            if ((!args || args.contentBase64 === undefined) && !opts.urn) {
                throw new Error("Missing required property 'contentBase64'");
            }
            if ((!args || args.objectStorageId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'objectStorageId'");
            }
            resourceInputs["acl"] = args ? args.acl : undefined;
            resourceInputs["contentBase64"] = args ? args.contentBase64 : undefined;
            resourceInputs["contentType"] = args ? args.contentType : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["objectStorageId"] = args ? args.objectStorageId : undefined;
            resourceInputs["aws"] = undefined /*out*/;
            resourceInputs["azure"] = undefined /*out*/;
            resourceInputs["gcp"] = undefined /*out*/;
            resourceInputs["resourceStatus"] = undefined /*out*/;
            resourceInputs["url"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectStorageObject.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectStorageObject resources.
 */
export interface ObjectStorageObjectState {
    /**
     * Access control for the given object. Can be public_read or private. Defaults to private.
     */
    acl?: pulumi.Input<string>;
    /**
     * AWS-specific ids of the underlying generated resources
     */
    aws?: pulumi.Input<inputs.ObjectStorageObjectAws>;
    /**
     * Azure-specific ids of the underlying generated resources
     */
    azure?: pulumi.Input<inputs.ObjectStorageObjectAzure>;
    /**
     * Content of the object
     */
    contentBase64?: pulumi.Input<string>;
    /**
     * Standard MIME type describing the format of the object data
     */
    contentType?: pulumi.Input<string>;
    /**
     * GCP-specific ids of the underlying generated resources
     */
    gcp?: pulumi.Input<inputs.ObjectStorageObjectGcp>;
    /**
     * Name of object storage object
     */
    name?: pulumi.Input<string>;
    /**
     * Id of object storage
     */
    objectStorageId?: pulumi.Input<string>;
    /**
     * Statuses of underlying created resources
     */
    resourceStatus?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * URL of object
     */
    url?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ObjectStorageObject resource.
 */
export interface ObjectStorageObjectArgs {
    /**
     * Access control for the given object. Can be public_read or private. Defaults to private.
     */
    acl?: pulumi.Input<string>;
    /**
     * Content of the object
     */
    contentBase64: pulumi.Input<string>;
    /**
     * Standard MIME type describing the format of the object data
     */
    contentType?: pulumi.Input<string>;
    /**
     * Name of object storage object
     */
    name?: pulumi.Input<string>;
    /**
     * Id of object storage
     */
    objectStorageId: pulumi.Input<string>;
}
