// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DatasyncLocationObjectStorage extends pulumi.CustomResource {
    /**
     * Get an existing DatasyncLocationObjectStorage resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatasyncLocationObjectStorageState, opts?: pulumi.CustomResourceOptions): DatasyncLocationObjectStorage {
        return new DatasyncLocationObjectStorage(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/datasyncLocationObjectStorage:DatasyncLocationObjectStorage';

    /**
     * Returns true if the given object is an instance of DatasyncLocationObjectStorage.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DatasyncLocationObjectStorage {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DatasyncLocationObjectStorage.__pulumiType;
    }

    /**
     * Optional. The access key is used if credentials are required to access the self-managed object storage server.
     */
    public readonly accessKey!: pulumi.Output<string>;
    /**
     * The Amazon Resource Name (ARN) of the agents associated with the self-managed object storage server location.
     */
    public readonly agentArns!: pulumi.Output<string[]>;
    /**
     * The name of the bucket on the self-managed object storage server.
     */
    public readonly bucketName!: pulumi.Output<string>;
    /**
     * The Amazon Resource Name (ARN) of the location that is created.
     */
    public /*out*/ readonly locationArn!: pulumi.Output<string>;
    /**
     * The URL of the object storage location that was described.
     */
    public /*out*/ readonly locationUri!: pulumi.Output<string>;
    /**
     * Optional. The secret key is used if credentials are required to access the self-managed object storage server.
     */
    public readonly secretKey!: pulumi.Output<string>;
    /**
     * X.509 PEM content containing a certificate authority or chain to trust.
     */
    public readonly serverCertificate!: pulumi.Output<string>;
    /**
     * The name of the self-managed object storage server. This value is the IP address or Domain Name Service (DNS) name of
     * the object storage server.
     */
    public readonly serverHostname!: pulumi.Output<string>;
    /**
     * The port that your self-managed server accepts inbound network traffic on.
     */
    public readonly serverPort!: pulumi.Output<number>;
    /**
     * The protocol that the object storage server uses to communicate.
     */
    public readonly serverProtocol!: pulumi.Output<string>;
    /**
     * The subdirectory in the self-managed object storage server that is used to read data from.
     */
    public readonly subdirectory!: pulumi.Output<string>;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    public readonly tags!: pulumi.Output<outputs.DatasyncLocationObjectStorageTag[]>;

    /**
     * Create a DatasyncLocationObjectStorage resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatasyncLocationObjectStorageArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DatasyncLocationObjectStorageArgs | DatasyncLocationObjectStorageState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DatasyncLocationObjectStorageState | undefined;
            resourceInputs["accessKey"] = state ? state.accessKey : undefined;
            resourceInputs["agentArns"] = state ? state.agentArns : undefined;
            resourceInputs["bucketName"] = state ? state.bucketName : undefined;
            resourceInputs["locationArn"] = state ? state.locationArn : undefined;
            resourceInputs["locationUri"] = state ? state.locationUri : undefined;
            resourceInputs["secretKey"] = state ? state.secretKey : undefined;
            resourceInputs["serverCertificate"] = state ? state.serverCertificate : undefined;
            resourceInputs["serverHostname"] = state ? state.serverHostname : undefined;
            resourceInputs["serverPort"] = state ? state.serverPort : undefined;
            resourceInputs["serverProtocol"] = state ? state.serverProtocol : undefined;
            resourceInputs["subdirectory"] = state ? state.subdirectory : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as DatasyncLocationObjectStorageArgs | undefined;
            if ((!args || args.agentArns === undefined) && !opts.urn) {
                throw new Error("Missing required property 'agentArns'");
            }
            resourceInputs["accessKey"] = args ? args.accessKey : undefined;
            resourceInputs["agentArns"] = args ? args.agentArns : undefined;
            resourceInputs["bucketName"] = args ? args.bucketName : undefined;
            resourceInputs["secretKey"] = args ? args.secretKey : undefined;
            resourceInputs["serverCertificate"] = args ? args.serverCertificate : undefined;
            resourceInputs["serverHostname"] = args ? args.serverHostname : undefined;
            resourceInputs["serverPort"] = args ? args.serverPort : undefined;
            resourceInputs["serverProtocol"] = args ? args.serverProtocol : undefined;
            resourceInputs["subdirectory"] = args ? args.subdirectory : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["locationArn"] = undefined /*out*/;
            resourceInputs["locationUri"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DatasyncLocationObjectStorage.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DatasyncLocationObjectStorage resources.
 */
export interface DatasyncLocationObjectStorageState {
    /**
     * Optional. The access key is used if credentials are required to access the self-managed object storage server.
     */
    accessKey?: pulumi.Input<string>;
    /**
     * The Amazon Resource Name (ARN) of the agents associated with the self-managed object storage server location.
     */
    agentArns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the bucket on the self-managed object storage server.
     */
    bucketName?: pulumi.Input<string>;
    /**
     * The Amazon Resource Name (ARN) of the location that is created.
     */
    locationArn?: pulumi.Input<string>;
    /**
     * The URL of the object storage location that was described.
     */
    locationUri?: pulumi.Input<string>;
    /**
     * Optional. The secret key is used if credentials are required to access the self-managed object storage server.
     */
    secretKey?: pulumi.Input<string>;
    /**
     * X.509 PEM content containing a certificate authority or chain to trust.
     */
    serverCertificate?: pulumi.Input<string>;
    /**
     * The name of the self-managed object storage server. This value is the IP address or Domain Name Service (DNS) name of
     * the object storage server.
     */
    serverHostname?: pulumi.Input<string>;
    /**
     * The port that your self-managed server accepts inbound network traffic on.
     */
    serverPort?: pulumi.Input<number>;
    /**
     * The protocol that the object storage server uses to communicate.
     */
    serverProtocol?: pulumi.Input<string>;
    /**
     * The subdirectory in the self-managed object storage server that is used to read data from.
     */
    subdirectory?: pulumi.Input<string>;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.DatasyncLocationObjectStorageTag>[]>;
}

/**
 * The set of arguments for constructing a DatasyncLocationObjectStorage resource.
 */
export interface DatasyncLocationObjectStorageArgs {
    /**
     * Optional. The access key is used if credentials are required to access the self-managed object storage server.
     */
    accessKey?: pulumi.Input<string>;
    /**
     * The Amazon Resource Name (ARN) of the agents associated with the self-managed object storage server location.
     */
    agentArns: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the bucket on the self-managed object storage server.
     */
    bucketName?: pulumi.Input<string>;
    /**
     * Optional. The secret key is used if credentials are required to access the self-managed object storage server.
     */
    secretKey?: pulumi.Input<string>;
    /**
     * X.509 PEM content containing a certificate authority or chain to trust.
     */
    serverCertificate?: pulumi.Input<string>;
    /**
     * The name of the self-managed object storage server. This value is the IP address or Domain Name Service (DNS) name of
     * the object storage server.
     */
    serverHostname?: pulumi.Input<string>;
    /**
     * The port that your self-managed server accepts inbound network traffic on.
     */
    serverPort?: pulumi.Input<number>;
    /**
     * The protocol that the object storage server uses to communicate.
     */
    serverProtocol?: pulumi.Input<string>;
    /**
     * The subdirectory in the self-managed object storage server that is used to read data from.
     */
    subdirectory?: pulumi.Input<string>;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.DatasyncLocationObjectStorageTag>[]>;
}
