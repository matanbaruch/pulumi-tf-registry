// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * The provider type for the elasticsearch package. By default, resources use package-wide configuration
 * settings, however an explicit `Provider` instance may be created and passed during resource
 * construction to achieve fine-grained programmatic control over provider settings. See the
 * [documentation](https://www.pulumi.com/docs/reference/programming-model/#providers) for more information.
 */
export class Provider extends pulumi.ProviderResource {
    /** @internal */
    public static readonly __pulumiType = 'elasticsearch';

    /**
     * Returns true if the given object is an instance of Provider.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Provider {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === "pulumi:providers:" + Provider.__pulumiType;
    }

    /**
     * The access key for use with AWS Elasticsearch Service domains
     */
    public readonly awsAccessKey!: pulumi.Output<string | undefined>;
    /**
     * Amazon Resource Name of an IAM Role to assume prior to making AWS API calls.
     */
    public readonly awsAssumeRoleArn!: pulumi.Output<string | undefined>;
    /**
     * The AWS profile for use with AWS Elasticsearch Service domains
     */
    public readonly awsProfile!: pulumi.Output<string | undefined>;
    /**
     * The AWS region for use in signing of AWS elasticsearch requests. Must be specified in order to use AWS URL signing with
     * AWS ElasticSearch endpoint exposed on a custom DNS domain.
     */
    public readonly awsRegion!: pulumi.Output<string | undefined>;
    /**
     * The secret key for use with AWS Elasticsearch Service domains
     */
    public readonly awsSecretKey!: pulumi.Output<string | undefined>;
    /**
     * AWS service name used in the credential scope of signed requests to ElasticSearch.
     */
    public readonly awsSignatureService!: pulumi.Output<string | undefined>;
    /**
     * The session token for use with AWS Elasticsearch Service domains
     */
    public readonly awsToken!: pulumi.Output<string | undefined>;
    /**
     * A Custom CA certificate
     */
    public readonly cacertFile!: pulumi.Output<string | undefined>;
    /**
     * A X509 certificate to connect to elasticsearch
     */
    public readonly clientCertPath!: pulumi.Output<string | undefined>;
    /**
     * A X509 key to connect to elasticsearch
     */
    public readonly clientKeyPath!: pulumi.Output<string | undefined>;
    /**
     * ElasticSearch Version
     */
    public readonly elasticsearchVersion!: pulumi.Output<string | undefined>;
    /**
     * If provided, sets the 'Host' header of requests and the 'ServerName' for certificate validation to this value. See the
     * documentation on connecting to Elasticsearch via an SSH tunnel.
     */
    public readonly hostOverride!: pulumi.Output<string | undefined>;
    /**
     * URL to reach the Kibana API
     */
    public readonly kibanaUrl!: pulumi.Output<string | undefined>;
    /**
     * Password to use to connect to elasticsearch using basic auth
     */
    public readonly password!: pulumi.Output<string | undefined>;
    /**
     * A bearer token or ApiKey for an Authorization header, e.g. Active Directory API key.
     */
    public readonly token!: pulumi.Output<string | undefined>;
    /**
     * The type of token, usually ApiKey or Bearer
     */
    public readonly tokenName!: pulumi.Output<string | undefined>;
    /**
     * Elasticsearch URL
     */
    public readonly url!: pulumi.Output<string>;
    /**
     * Username to use to connect to elasticsearch using basic auth
     */
    public readonly username!: pulumi.Output<string | undefined>;

    /**
     * Create a Provider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProviderArgs, opts?: pulumi.ResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        {
            if ((!args || args.url === undefined) && !opts.urn) {
                throw new Error("Missing required property 'url'");
            }
            resourceInputs["awsAccessKey"] = args ? args.awsAccessKey : undefined;
            resourceInputs["awsAssumeRoleArn"] = args ? args.awsAssumeRoleArn : undefined;
            resourceInputs["awsProfile"] = args ? args.awsProfile : undefined;
            resourceInputs["awsRegion"] = args ? args.awsRegion : undefined;
            resourceInputs["awsSecretKey"] = args ? args.awsSecretKey : undefined;
            resourceInputs["awsSignatureService"] = args ? args.awsSignatureService : undefined;
            resourceInputs["awsToken"] = args ? args.awsToken : undefined;
            resourceInputs["cacertFile"] = args ? args.cacertFile : undefined;
            resourceInputs["clientCertPath"] = args ? args.clientCertPath : undefined;
            resourceInputs["clientKeyPath"] = args ? args.clientKeyPath : undefined;
            resourceInputs["elasticsearchVersion"] = args ? args.elasticsearchVersion : undefined;
            resourceInputs["healthcheck"] = pulumi.output(args ? args.healthcheck : undefined).apply(JSON.stringify);
            resourceInputs["hostOverride"] = args ? args.hostOverride : undefined;
            resourceInputs["insecure"] = pulumi.output(args ? args.insecure : undefined).apply(JSON.stringify);
            resourceInputs["kibanaUrl"] = args ? args.kibanaUrl : undefined;
            resourceInputs["password"] = args ? args.password : undefined;
            resourceInputs["signAwsRequests"] = pulumi.output(args ? args.signAwsRequests : undefined).apply(JSON.stringify);
            resourceInputs["sniff"] = pulumi.output(args ? args.sniff : undefined).apply(JSON.stringify);
            resourceInputs["token"] = args ? args.token : undefined;
            resourceInputs["tokenName"] = args ? args.tokenName : undefined;
            resourceInputs["url"] = args ? args.url : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
            resourceInputs["versionPingTimeout"] = pulumi.output(args ? args.versionPingTimeout : undefined).apply(JSON.stringify);
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Provider.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * The set of arguments for constructing a Provider resource.
 */
export interface ProviderArgs {
    /**
     * The access key for use with AWS Elasticsearch Service domains
     */
    awsAccessKey?: pulumi.Input<string>;
    /**
     * Amazon Resource Name of an IAM Role to assume prior to making AWS API calls.
     */
    awsAssumeRoleArn?: pulumi.Input<string>;
    /**
     * The AWS profile for use with AWS Elasticsearch Service domains
     */
    awsProfile?: pulumi.Input<string>;
    /**
     * The AWS region for use in signing of AWS elasticsearch requests. Must be specified in order to use AWS URL signing with
     * AWS ElasticSearch endpoint exposed on a custom DNS domain.
     */
    awsRegion?: pulumi.Input<string>;
    /**
     * The secret key for use with AWS Elasticsearch Service domains
     */
    awsSecretKey?: pulumi.Input<string>;
    /**
     * AWS service name used in the credential scope of signed requests to ElasticSearch.
     */
    awsSignatureService?: pulumi.Input<string>;
    /**
     * The session token for use with AWS Elasticsearch Service domains
     */
    awsToken?: pulumi.Input<string>;
    /**
     * A Custom CA certificate
     */
    cacertFile?: pulumi.Input<string>;
    /**
     * A X509 certificate to connect to elasticsearch
     */
    clientCertPath?: pulumi.Input<string>;
    /**
     * A X509 key to connect to elasticsearch
     */
    clientKeyPath?: pulumi.Input<string>;
    /**
     * ElasticSearch Version
     */
    elasticsearchVersion?: pulumi.Input<string>;
    /**
     * Set the client healthcheck option for the elastic client. Healthchecking is designed for direct access to the cluster.
     */
    healthcheck?: pulumi.Input<boolean>;
    /**
     * If provided, sets the 'Host' header of requests and the 'ServerName' for certificate validation to this value. See the
     * documentation on connecting to Elasticsearch via an SSH tunnel.
     */
    hostOverride?: pulumi.Input<string>;
    /**
     * Disable SSL verification of API calls
     */
    insecure?: pulumi.Input<boolean>;
    /**
     * URL to reach the Kibana API
     */
    kibanaUrl?: pulumi.Input<string>;
    /**
     * Password to use to connect to elasticsearch using basic auth
     */
    password?: pulumi.Input<string>;
    /**
     * Enable signing of AWS elasticsearch requests. The `url` must refer to AWS ES domain (`*.<region>.es.amazonaws.com`), or
     * `aws_region` must be specified explicitly.
     */
    signAwsRequests?: pulumi.Input<boolean>;
    /**
     * Set the node sniffing option for the elastic client. Client won't work with sniffing if nodes are not routable.
     */
    sniff?: pulumi.Input<boolean>;
    /**
     * A bearer token or ApiKey for an Authorization header, e.g. Active Directory API key.
     */
    token?: pulumi.Input<string>;
    /**
     * The type of token, usually ApiKey or Bearer
     */
    tokenName?: pulumi.Input<string>;
    /**
     * Elasticsearch URL
     */
    url: pulumi.Input<string>;
    /**
     * Username to use to connect to elasticsearch using basic auth
     */
    username?: pulumi.Input<string>;
    /**
     * Version ping timeout in seconds
     */
    versionPingTimeout?: pulumi.Input<number>;
}
